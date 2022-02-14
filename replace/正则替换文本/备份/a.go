package nonproc

import (
"encoding/json"
"net/http"
"net/url"
"time"

"git.code.oa.com/ev_platform/tcp-wxgame_workbench_web/invoker"
"git.code.oa.com/ev_platform/tcp-wxgame_workbench_web/model"
"git.code.oa.com/fip-team/rasse/xgin"
"git.code.oa.com/fip-team/rasse/xlog"
"github.com/gin-gonic/gin"
)

// GetData
// +post /nonproc/getData
func GetData(ctx *gin.Context) {
ctx.JSON(http.StatusOK, "you get it")
}

// 生成抽检单据批次号（之前抽检未审核）
// +post /nonproc/genLocalOrderByCondition
func GenLocalOrderByCondition(ctx *gin.Context) {
var request model.InspectionCondition

err := ctx.ShouldBindJSON(&request)
if err != nil {
ctx.JSON(http.StatusOK, model.ErrorBindJson)
return
}

user := model.GetUser(ctx)

bReq, _ := json.Marshal(request)
xlog.Debug(string(bReq))
bUser, _ := json.Marshal(user)
xlog.Debug(string(bUser))
// NewInvokerCtx
var xctx = xgin.NewContext(ctx)
nonprocinvoker := invoker.NewNonProcInvokerCtx(xctx)

result, err := nonprocinvoker.GenLocalOrderByCondition(request, user)
if err != nil {
ctx.JSON(http.StatusInternalServerError, model.Response{Code: 315005, Message: err.Error()})
return
}

ctx.JSON(http.StatusOK, result)
}

// 生成抽检单据批次号
// +post /nonproc/genOrderByCondition
func GenOrderByCondition(ctx *gin.Context) {
var request model.InspectionCondition

err := ctx.ShouldBindJSON(&request)
if err != nil {
ctx.JSON(http.StatusOK, model.ErrorBindJson)
return
}

user := model.GetUser(ctx)

bReq, _ := json.Marshal(request)
xlog.Debug(string(bReq))
bUser, _ := json.Marshal(user)
xlog.Debug(string(bUser))
// NewInvokerCtx
var xctx = xgin.NewContext(ctx)
nonprocinvoker := invoker.NewNonProcInvokerCtx(xctx)

result, err := nonprocinvoker.GenOrderByCondition(request, user)
if err != nil {
ctx.JSON(http.StatusInternalServerError, model.Response{Code: 315005, Message: err.Error()})
return
}

ctx.JSON(http.StatusOK, result)
}

//获取抽检数据
// +post /nonproc/getOrderByBatchId
func GetOrderByBatchId(ctx *gin.Context) {
var request model.SearchOrderCondition

err := ctx.ShouldBindJSON(&request)
if err != nil {
ctx.JSON(http.StatusOK, model.ErrorBindJson)
return
}

user := model.GetUser(ctx)
// NewInvokerCtx
var xctx = xgin.NewContext(ctx)
nonprocinvoker := invoker.NewNonProcInvokerCtx(xctx)

result, err := nonprocinvoker.GetOrderByBatchId(request, user)
if err != nil {
ctx.JSON(http.StatusInternalServerError, model.Response{Code: 315005, Message: err.Error()})
return
}

ctx.JSON(http.StatusOK, result)

}

// 取消抽检
// +post /nonproc/cancelOrderByBatchId
func CancelOrderByBatchId(ctx *gin.Context) {
var request model.CancelCondition
err := ctx.ShouldBindJSON(&request)
if err != nil {
ctx.JSON(http.StatusOK, model.ErrorBindJson)
return
}

user := model.GetUser(ctx)
// NewInvokerCtx
var xctx = xgin.NewContext(ctx)
nonprocinvoker := invoker.NewNonProcInvokerCtx(xctx)

err = nonprocinvoker.CancelOrderByBatchId(request, user)

if err != nil {
ctx.JSON(http.StatusInternalServerError, model.Response{Code: 315005, Message: err.Error()})
return
}
ctx.JSON(http.StatusOK, model.Response{Code: 0})
}

// 审批抽检单据
// +post /nonproc/auditOrder
func AuditOrder(ctx *gin.Context) {
var request model.AuditCondition
err := ctx.ShouldBindJSON(&request)
if err != nil {
ctx.JSON(http.StatusOK, model.ErrorBindJson)
return
}

user := model.GetUser(ctx)
if request.AuditTime == "" {
request.AuditTime = time.Now().Format("2006-01-02 15:04:05")
}
request.SubmitTime = time.Now().Format("2006-01-02 15:04:05")
// NewInvokerCtx
var xctx = xgin.NewContext(ctx)
nonprocinvoker := invoker.NewNonProcInvokerCtx(xctx)

err = nonprocinvoker.AuditOrder(request, user)

if err != nil {
ctx.JSON(http.StatusInternalServerError, model.Response{Code: 315005, Message: err.Error()})
return
}
ctx.JSON(http.StatusOK, model.Response{Code: 0})
}

// 查询抽检单据
// +post /nonproc/searchInspect
func SearchInspect(ctx *gin.Context) {
var request model.InspectSearchCondition

err := ctx.ShouldBindJSON(&request)
if err != nil {
ctx.JSON(http.StatusOK, model.ErrorBindJson)
return
}

user := model.GetUser(ctx)

bReq, _ := json.Marshal(request)
xlog.Debug(string(bReq))
bUser, _ := json.Marshal(user)
xlog.Debug(string(bUser))
// NewInvokerCtx
var xctx = xgin.NewContext(ctx)
nonprocinvoker := invoker.NewNonProcInvokerCtx(xctx)

result, err := nonprocinvoker.SearchInspect(request, user)
if err != nil {
ctx.JSON(http.StatusInternalServerError, model.Response{Code: 315005, Message: err.Error()})
return
}

ctx.JSON(http.StatusOK, result)
}

// 导出search
// +get /nonproc/inspectNonprocExport
func InspectNonprocExport(ctx *gin.Context) {
params := ctx.Request.FormValue("params")

var request model.InspectSearchCondition
err := json.Unmarshal([]byte(params), &request)
if err != nil {
ctx.JSON(http.StatusOK, model.ErrorBindJson)
return
}

var user model.User
user.UserID = request.UserID
user.UserName = request.UserName
// NewInvokerCtx
var xctx = xgin.NewContext(ctx)
nonprocinvoker := invoker.NewNonProcInvokerCtx(xctx)

result, err := nonprocinvoker.SearchInspect(request, user)
if err != nil {
ctx.JSON(http.StatusInternalServerError, model.Response{Code: 315005, Message: err.Error()})
return
}

if result.Data.Count > 10000 {
		ctx.JSON(http.StatusOK, model.Response{Code: 315005, Message: "导出数据大于一万条，请重新筛选条件！"})return
}

if result.Data.Count == 0 {
		ctx.JSON(http.StatusOK, model.Response{Code: 315005, Message: "当前条件下无可导出数据，请重新筛选条件！"})return
}

var bs []byte
sheetName := ""
switch request.CategoryID {
case 1:
if request.TypeID == 1 {
sheetName = "先审后发图文视频抽检列表"
bs, err = nonprocinvoker.SupplierInspectVideoExport(result.Data, sheetName)
} else if request.TypeID == 2 {
sheetName = "先审后发图文抽检列表"
bs, err = nonprocinvoker.SupplierInspectMainExport(result.Data, sheetName)
}
break
case 2:
if request.TypeID == 1 {
sheetName = "先发后审图文视频抽检列表"
bs, err = nonprocinvoker.SupplierInspectVideoExport(result.Data, sheetName)
} else if request.TypeID == 2 {
sheetName = "先发后审图文抽检列表"
bs, err = nonprocinvoker.SupplierInspectMainExport(result.Data, sheetName)
} else if request.TypeID == 3 {
sheetName = "先发后审评论抽检查询列表"
bs, err = nonprocinvoker.SupplierInspectReportExport(result.Data, sheetName)
}
break
case 3:
if request.TypeID == 1 {
sheetName = "投诉图文视频抽检列表"
bs, err = nonprocinvoker.SupplierInspectVideoReportExport(result.Data, sheetName)
} else if request.TypeID == 2 {
sheetName = "投诉图文抽检列表"
bs, err = nonprocinvoker.SupplierInspectMainReportExport(result.Data, sheetName)
}
break
}

if err != nil {
ctx.JSON(http.StatusInternalServerError, model.Response{Code: 315005, Message: err.Error()})
return
}

ctx.Header("Content-Description", "File Transfer")
ctx.Header("Content-Disposition", "attachment; filename="+url.QueryEscape(sheetName+".xlsx"))
ctx.Data(http.StatusOK, "application/octet-stream", bs)

}

// 导出search
// +get /nonproc/qualityNonprocExport
func QualityNonprocExport(ctx *gin.Context) {
params := ctx.Request.FormValue("params")

var request model.InspectSearchCondition
err := json.Unmarshal([]byte(params), &request)
if err != nil {
ctx.JSON(http.StatusOK, model.ErrorBindJson)
return
}

var user model.User
user.UserID = request.UserID
user.UserName = request.UserName
// NewInvokerCtx
var xctx = xgin.NewContext(ctx)
nonprocinvoker := invoker.NewNonProcInvokerCtx(xctx)

result, err := nonprocinvoker.SearchInspect(request, user)
if err != nil {
ctx.JSON(http.StatusInternalServerError, model.Response{Code: 315005, Message: err.Error()})
return
}

if result.Data.Count > 10000 {
		ctx.JSON(http.StatusOK, model.Response{Code: 315005, Message: "导出数据大于一万条，请重新筛选条件！"})return
}

if result.Data.Count == 0 {
		ctx.JSON(http.StatusOK, model.Response{Code: 315005, Message: "当前条件下无可导出数据，请重新筛选条件！"})return
}

var bs []byte
sheetName := ""
switch request.CategoryID {
case 1:
if request.TypeID == 1 {
sheetName = "先审后发图文视频质检列表"
bs, err = nonprocinvoker.TencentInspectVideoExport(result.Data, sheetName)
} else if request.TypeID == 2 {
sheetName = "先审后发图文质检列表"
bs, err = nonprocinvoker.TencentInspectMainExport(result.Data, sheetName)
}
break
case 2:
if request.TypeID == 1 {
sheetName = "先发后审图文视频质检列表"
bs, err = nonprocinvoker.TencentInspectVideoExport(result.Data, sheetName)
} else if request.TypeID == 2 {
sheetName = "先发后审图文质检列表"
bs, err = nonprocinvoker.TencentInspectMainExport(result.Data, sheetName)
} else if request.TypeID == 3 {
sheetName = "先发后审评论质检查询列表"
bs, err = nonprocinvoker.TencentInspectReportExport(result.Data, sheetName)
}
break
case 3:
if request.TypeID == 1 {
sheetName = "投诉图文视频质检列表"
bs, err = nonprocinvoker.TencentInspectVideoReportExport(result.Data, sheetName)
} else if request.TypeID == 2 {
sheetName = "投诉图文质检列表"
bs, err = nonprocinvoker.TencentInspectMainReportExport(result.Data, sheetName)
}
break
}

if err != nil {
ctx.JSON(http.StatusInternalServerError, model.Response{Code: 315005, Message: err.Error()})
return
}

ctx.Header("Content-Description", "File Transfer")
ctx.Header("Content-Disposition", "attachment; filename="+url.QueryEscape(sheetName+".xlsx"))
ctx.Data(http.StatusOK, "application/octet-stream", bs)

}

// 导出前查询
// +post /nonproc/nonprocForExport
func NonprocForExport(ctx *gin.Context) {
var request model.InspectSearchCondition

err := ctx.ShouldBindJSON(&request)
if err != nil {
ctx.JSON(http.StatusOK, model.ErrorBindJson)
return
}

user := model.GetUser(ctx)

bReq, _ := json.Marshal(request)
xlog.Debug(string(bReq))
bUser, _ := json.Marshal(user)
xlog.Debug(string(bUser))
// NewInvokerCtx
var xctx = xgin.NewContext(ctx)
nonprocinvoker := invoker.NewNonProcInvokerCtx(xctx)

result, err := nonprocinvoker.SearchInspect(request, user)
if err != nil {
ctx.JSON(http.StatusInternalServerError, model.Response{Code: 315005, Message: err.Error()})
return
}

if result.Data.Count > 10000 {
		ctx.JSON(http.StatusOK, model.Response{Code: 315005, Message: "导出数据大于一万条，请重新筛选条件！"})return
}

if result.Data.Count == 0 {
		ctx.JSON(http.StatusOK, model.Response{Code: 315005, Message: "当前条件下无可导出数据，请重新筛选条件！"})return
}
ctx.JSON(http.StatusOK, result)

}

// 导出
// +post /nonproc/exportNonproc
func ExportNonproc(ctx *gin.Context) {
var request model.InspectSearchCondition

err := ctx.ShouldBindJSON(&request)
if err != nil {
ctx.JSON(http.StatusOK, model.ErrorBindJson)
return
}

user := model.GetUser(ctx)

bReq, _ := json.Marshal(request)
xlog.Debug(string(bReq))
bUser, _ := json.Marshal(user)
xlog.Debug(string(bUser))
// NewInvokerCtx
var xctx = xgin.NewContext(ctx)
nonprocinvoker := invoker.NewNonProcInvokerCtx(xctx)

result, err := nonprocinvoker.SearchInspect(request, user)
if err != nil {
ctx.JSON(http.StatusInternalServerError, model.Response{Code: 318200, Message: err.Error()})
return
}

if result.Data.Count > 10000 {
		ctx.JSON(http.StatusOK, model.Response{Code: 318200, Message: "导出数据大于一万条，请重新筛选条件！"})return
}

if result.Data.Count == 0 {
		ctx.JSON(http.StatusOK, model.Response{Code: 318200, Message: "当前条件下无可导出数据，请重新筛选条件！"})return
}

var bs []byte
sheetName := "查询列表"
bs, err = invoker.ExportExcel(result.Data.Items, request.HeadData, sheetName)

if err != nil {
ctx.JSON(http.StatusInternalServerError, model.Response{Code: 318200, Message: err.Error()})
return
}

ctx.Header("Content-Description", "File Transfer")
ctx.Header("Content-Disposition", "attachment; filename="+url.QueryEscape(sheetName+".xlsx"))
ctx.Data(http.StatusOK, "application/octet-stream", bs)
}

