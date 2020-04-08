String.prototype.format = function () { if (arguments.length == 0) { return this } var param = arguments[0]; var s = this; if (typeof (param) == "object") { for (var key in param) { s = s.replace(new RegExp("\\{" + key + "\\}", "g"), param[key]) } return s } else { for (var i = 0; i < arguments.length; i++) { s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]) } return s } };

var a = [["审核员质量审核数据统计", "/supplier-inspect-quality-daily-statistics", "否", "ev_product_job_statistics", "ev_product_job_statistics_tag", "1"], ["审核员安全单据数据统计", "/supplier-inspect-safety-daily-statistics", "否", "ev_product_job_statistics", "ev_product_job_statistics_tag", "2"], ["审核员质量审核派单统计", "/supplier-inspect-quality-distributed-statistics", "否", "ev_product_job_statistics", "ev_product_job_statistics_tag", "3"], ["审核员安全审核派单统计", "/supplier-inspect-safety-distributed-statistics", "否", "ev_product_job_statistics", "ev_product_job_statistics_tag", "4"], ["审核员人力负荷统计", "/supplier-inspect-manpower-statistics", "否", "ev_product_job_statistics", "ev_product_job_statistics_tag", "5"], ["供应商质量审核数据统计", "/tencent-inspect-quality-daily-statistics", "否", "ev_product_bussiness_statistics", "ev_product_bussiness_statistics_tag", "1"], ["供应商安全单据数据统计", "/tencent-inspect-safety-daily-statistics", "否", "ev_product_bussiness_statistics", "ev_product_bussiness_statistics_tag", "2"], ["供应商人力负荷统计", "/tencent-inspect-manpower-statistics", "否", "ev_product_bussiness_statistics", "ev_product_bussiness_statistics_tag", "3"], ["效率统计报表", "/tencent-efficiency-statistics", "否", "ev_product_purch_statistics", "ev_product_purch_statistics_tag", "1"]]

var product_code = "wxgv"
var sqls = [];
var sqlsStr = "";
var sql1 = "INSERT INTO `{0}_biz_basic`.`{0}_menu` (`menu_id`, `menu_name`, `parent_id`, `url`, `operation_code`, `serial_index`, `product_code`,`menu_memo`, `class_name`, `expanded`, `group`, `home`, `link`, `path_match`, `query_params`, `skip_location_change`, `target`, `create_time`, `creater_id`, `creater_name`, `update_time`, `updater_id`, `updater_name`, `is_delete`) SELECT REPLACE(UUID(), '-', ''), '{1}', (SELECT `menu_id` FROM `{0}_biz_basic`.`{0}_menu` WHERE `operation_code` = '{4}'), '', '{3}', {5}, '{0}','{0}', '', null, 0, 0, '{2}', 'full', '', null, '', SYSDATE(), '0', 'system', SYSDATE(), '0', 'system', 'N';"
var sql2 = "INSERT INTO `{0}_biz_basic`.`{0}_menu` (`menu_id`, `menu_name`, `parent_id`, `url`, `operation_code`, `serial_index`, `product_code`,`menu_memo`, `class_name`, `expanded`, `group`, `home`, `link`, `path_match`, `query_params`, `skip_location_change`, `target`, `create_time`, `creater_id`, `creater_name`, `update_time`, `updater_id`, `updater_name`, `is_delete`, `hidden`) SELECT REPLACE(UUID(), '-', ''), '{1}', (SELECT `menu_id` FROM `{0}_biz_basic`.`{0}_menu` WHERE `operation_code` = '{4}'), '', '{3}', {5}, '{0}','{0}', '', null, 0, 0, '{2}', 'full', '', null, '', SYSDATE(), '0', 'system', SYSDATE(), '0', 'system', 'N',1;"


a.forEach(item => {
    csql = ""
    if (item[2] !== "是") {
        csql = sql1.format(product_code, item[0], item[1], item[3], item[4], parseInt(item[5]));
    } else {
        csql = sql2.format(product_code, item[0], item[1], item[3], item[4], parseInt(item[5]));
    }
    sqls.push(csql);
    sqlsStr += csql + "\n";

});
console.log(sqlsStr)
// console.log(sqls.toString())
