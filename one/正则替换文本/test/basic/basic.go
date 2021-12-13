package basic

import (
	"encoding/json"
	"git.code.oa.com/ev_platform/tcp-wxgv_workbench_web/invoker"
	"git.code.oa.com/ev_platform/tcp-wxgv_workbench_web/model"
	"git.code.oa.com/fip-team/rasse/xgin"
	"git.code.oa.com/fip-team/rasse/xlog"
	"github.com/gin-gonic/gin"
	"net/http"
)

//根据用户权限获取菜单
// +post /basic/getMenuTree
func GetMenuTree(ctx *gin.Context) {
	var request []model.Operation
	err := ctx.ShouldBindJSON(&request)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, model.ErrorBindJson)
		return
	}

	bReq, _ := json.Marshal(request)
	xlog.Debug(string(bReq))

	user := model.GetUser(ctx)
	// NewInvokerCtx
	var xctx = xgin.NewContext(ctx)
	basicinvoker := invoker.NewBasicInvokerCtx(xctx);

	result, err := basicinvoker.GetMenuTree(request, user)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, model.Response{Code: 315001, Message: err.Error()})
		return
	}
	ctx.JSON(http.StatusOK, result)

}
