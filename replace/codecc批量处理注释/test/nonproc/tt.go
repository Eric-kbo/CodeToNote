package account

import (
	"encoding/json"
	"git.code.oa.com/ev_platform/tcp_portal_web/invoker"
	"git.code.oa.com/ev_platform/tcp_portal_web/model"
	"git.code.oa.com/fip-team/rasse/xgin"
	"git.code.oa.com/fip-team/rasse/xlog"
	"github.com/gin-gonic/gin"
	"net/http"
)

//获取验证码
// +get /account/getCaptcha 方法
func GetCaptcha(ctx *gin.Context) {
	captchaType := ctx.Request.FormValue("captchaType")
	height := ctx.Request.FormValue("height")
	width := ctx.Request.FormValue("width")
	len := ctx.Request.FormValue("len")
	// NewInvokerCtx
	var xctx = xgin.NewContext(ctx)
	accountinvoker := invoker.NewAccountInvokerCtx(xctx);

	result, err := accountinvoker.GetCaptcha(captchaType, height, width, len)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, model.Response{Code: 315001, Message: err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, model.Response{Code: 0, Data: result, Message: ""})
}

//登录
// +post /account/login 方法
func Login(ctx *gin.Context) {
	var request model.LoginParams

	err := ctx.ShouldBindJSON(&request)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, model.ErrorBindJson)
		return
	}

	bReq, _ := json.Marshal(request)
	xlog.Debug(string(bReq))
	// NewInvokerCtx
	var xctx = xgin.NewContext(ctx)
	accountinvoker := invoker.NewAccountInvokerCtx(xctx);

	result, err := accountinvoker.Login(request)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, model.Response{Code: 315001, Message: err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, result)
}

//获取用户基本信息
// +get /account/getUserInfoByToken 方法
func GetUserInfoByToken(ctx *gin.Context) {
	token := ctx.Request.FormValue("token")
	// NewInvokerCtx
	var xctx = xgin.NewContext(ctx)
	accountinvoker := invoker.NewAccountInvokerCtx(xctx);

	result, err := accountinvoker.GetUserInfoByToken(token)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, model.Response{Code: 315001, Message: err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, result)
}

//退出
// +get /account/logoff 方法
func Logoff(ctx *gin.Context) {

}

// +post /account/setPassword 方法
func SetPassword(ctx *gin.Context) {
	var request model.UserInput

	err := ctx.ShouldBindJSON(&request)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, model.ErrorBindJson)
		return
	}

	user := model.GetUser(ctx)

	bReq, _ := json.Marshal(request)
	xlog.Debug(string(bReq))
	// NewInvokerCtx
	var xctx = xgin.NewContext(ctx)
	accountinvoker := invoker.NewAccountInvokerCtx(xctx);

	result, err := accountinvoker.SetPassword(request, user)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, model.Response{Code: 315001, Message: err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, result)
}

