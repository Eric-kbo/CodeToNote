String.prototype.format = function () { if (arguments.length == 0) { return this } var param = arguments[0]; var s = this; if (typeof (param) == "object") { for (var key in param) { s = s.replace(new RegExp("\\{" + key + "\\}", "g"), param[key]) } return s } else { for (var i = 0; i < arguments.length; i++) { s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]) } return s } };

var typeS = [["2", "order", "弱订单"], ["3", "corporate", "企业资料修改"], ["4", "window", "企业橱窗修改"], ["5", "relate", "关联企业修改"], ["6", "message", "群发消息"]];
var categoryS = [["1", "bef", "先发后审"], ["3", "review", "再次推送"]];
var product_code = "ep"
var flow_name = "审核"
var step = "审核"
var sqls = [];
var sqlsStr = "";

var sql1 = "INSERT INTO`{8}_workbench`.`{8}_sys_dict_type` ( `uuid`, `category_id`, `category_code`, `category_name`, `type_id`, `type_code`, `type_name`, `flow_name`, `step`, `create_by`, `create_by_name`, `create_time`, `update_by`, `update_by_name`, `update_time`, `is_delete` ) VALUES ( UUID(), '{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}', '{7}', '196618', 'chuck', '2020-02-19 12:15:45', '196618', 'chuck', '2020-02-19 12:15:45', 'N' );";


categoryS.forEach(cate => {
    csql = "";
    typeS.forEach(typ => {
        if (cate[0] == "3") {
            if (typ[0] == "2") {
                csql = sql1.format(cate[0], cate[1], cate[2], typ[0], typ[1], typ[2], flow_name, step, product_code);
                sqls.push(csql);
                sqlsStr += csql + "\n";
            }
        } else {
            csql = sql1.format(cate[0], cate[1], cate[2], typ[0], typ[1], typ[2], flow_name, step, product_code);
            sqls.push(csql);
            sqlsStr += csql + "\n";
        }
    });
});

console.log(sqlsStr)
// console.log(sqls.toString())

