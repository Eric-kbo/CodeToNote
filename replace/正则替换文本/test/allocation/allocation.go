package allocation

import (
	"git.code.oa.com/ev_platform/tcp-wxgv_workbench_web/invoker"
	"git.code.oa.com/ev_platform/tcp-wxgv_workbench_web/model"
	"git.code.oa.com/fip-team/rasse/xgin"
	"github.com/gin-gonic/gin"
	"net/http"
)

//根据用户权限获取菜单
// +get /allocation/getTypesBySupplierID
func GetTypesBySupplierID(ctx *gin.Context) {
	supplierId := ctx.Request.FormValue("supplier_id")
	user := model.GetUser(ctx)
	// NewInvokerCtx
	var xctx = xgin.NewContext(ctx)
	allactioninvoker := invoker.NewAllocationInvokerCtx(xctx);

	result, err := allactioninvoker.GetTypesBySupplierID(supplierId, user)

	if err != nil {
		ctx.JSON(http.StatusInternalServerError, model.Response{Code: 314001, Message: err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, result.Data)
}


