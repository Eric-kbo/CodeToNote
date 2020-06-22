"use strict";
// var a = "[{\"id\":10979,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":10978,\"level\":2,\"name\":\"测试3\",\"alias\":\"测试3\",\"show\":1,\"show_name\":\"\",\"desc\":\"测试3\",\"order\":0,\"HasChild\":0},{\"id\":11332,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":11329,\"level\":2,\"name\":\"二级标签啊\",\"alias\":\"\",\"show\":1,\"show_name\":\"\",\"desc\":\"\",\"order\":0,\"HasChild\":0},{\"id\":11354,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":11331,\"level\":2,\"name\":\"我再看看\",\"alias\":\"\",\"show\":1,\"show_name\":\"\",\"desc\":\"\",\"order\":0,\"HasChild\":0},{\"id\":11358,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":10978,\"level\":2,\"name\":\"只限定一级标签后新增，即为新增二级标签\",\"alias\":\"\",\"show\":1,\"show_name\":\"\",\"desc\":\"\",\"order\":0,\"HasChild\":0},{\"id\":11437,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":10978,\"level\":2,\"name\":\"和平精英\",\"alias\":\"\",\"show\":1,\"show_name\":\"\",\"desc\":\"\",\"order\":0,\"HasChild\":0},{\"id\":11512,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":0,\"level\":2,\"name\":\"game一级标签\",\"alias\":\"\",\"show\":1,\"show_name\":\"\",\"desc\":\"\",\"order\":0,\"HasChild\":0},{\"id\":11313,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":11332,\"level\":3,\"name\":\"测试\",\"alias\":\"测试4\",\"show\":1,\"show_name\":\"\",\"desc\":\"测试4\",\"order\":0,\"HasChild\":0},{\"id\":11333,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":10979,\"level\":3,\"name\":\"测试3-1\",\"alias\":\"\",\"show\":1,\"show_name\":\"\",\"desc\":\"\",\"order\":0,\"HasChild\":0},{\"id\":11334,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":10979,\"level\":3,\"name\":\"测试3-2\",\"alias\":\"\",\"show\":1,\"show_name\":\"\",\"desc\":\"\",\"order\":0,\"HasChild\":0},{\"id\":11335,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":10979,\"level\":3,\"name\":\"测试3-3\",\"alias\":\"\",\"show\":1,\"show_name\":\"\",\"desc\":\"\",\"order\":0,\"HasChild\":0},{\"id\":11336,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":10979,\"level\":3,\"name\":\"测试3-4\",\"alias\":\"\",\"show\":1,\"show_name\":\"\",\"desc\":\"\",\"order\":0,\"HasChild\":0},{\"id\":11337,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":10979,\"level\":3,\"name\":\"测试3-5\",\"alias\":\"\",\"show\":1,\"show_name\":\"\",\"desc\":\"\",\"order\":0,\"HasChild\":0},{\"id\":11338,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":10979,\"level\":3,\"name\":\"测试3-6\",\"alias\":\"\",\"show\":1,\"show_name\":\"\",\"desc\":\"\",\"order\":0,\"HasChild\":0},{\"id\":11339,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":10979,\"level\":3,\"name\":\"测试3-7\",\"alias\":\"\",\"show\":1,\"show_name\":\"\",\"desc\":\"\",\"order\":0,\"HasChild\":0},{\"id\":11340,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":11332,\"level\":3,\"name\":\"三级\",\"alias\":\"\",\"show\":1,\"show_name\":\"\",\"desc\":\"\",\"order\":0,\"HasChild\":0},{\"id\":11341,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":11332,\"level\":3,\"name\":\"二级2\",\"alias\":\"\",\"show\":1,\"show_name\":\"\",\"desc\":\"\",\"order\":0,\"HasChild\":0},{\"id\":11342,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":11332,\"level\":3,\"name\":\"二级3\",\"alias\":\"\",\"show\":1,\"show_name\":\"\",\"desc\":\"\",\"order\":0,\"HasChild\":0},{\"id\":11343,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":10979,\"level\":3,\"name\":\"测试3-8\",\"alias\":\"\",\"show\":1,\"show_name\":\"\",\"desc\":\"\",\"order\":0,\"HasChild\":0},{\"id\":11344,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":10979,\"level\":3,\"name\":\"测试3-9\",\"alias\":\"\",\"show\":1,\"show_name\":\"\",\"desc\":\"\",\"order\":0,\"HasChild\":0},{\"id\":11345,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":10979,\"level\":3,\"name\":\"测试3-10\",\"alias\":\"\",\"show\":1,\"show_name\":\"\",\"desc\":\"\",\"order\":0,\"HasChild\":0},{\"id\":11346,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":10979,\"level\":3,\"name\":\"测试3-11\",\"alias\":\"\",\"show\":1,\"show_name\":\"\",\"desc\":\"\",\"order\":0,\"HasChild\":0},{\"id\":11347,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":10979,\"level\":3,\"name\":\"测试3-12\",\"alias\":\"\",\"show\":1,\"show_name\":\"\",\"desc\":\"\",\"order\":0,\"HasChild\":0},{\"id\":11353,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":10979,\"level\":3,\"name\":\"？？？\",\"alias\":\"\",\"show\":1,\"show_name\":\"\",\"desc\":\"\",\"order\":0,\"HasChild\":0},{\"id\":11355,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":11354,\"level\":3,\"name\":\"这个加号能点击吗\",\"alias\":\"\",\"show\":1,\"show_name\":\"\",\"desc\":\"\",\"order\":0,\"HasChild\":0},{\"id\":11439,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":11332,\"level\":3,\"name\":\"刺激战场2\",\"alias\":\"\",\"show\":1,\"show_name\":\"\",\"desc\":\"\",\"order\":0,\"HasChild\":0},{\"id\":11496,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":11340,\"level\":4,\"name\":\"四级\",\"alias\":\"\",\"show\":1,\"show_name\":\"\",\"desc\":\"\",\"order\":0,\"HasChild\":0},{\"id\":11500,\"appid\":\"wx8d08365c0c59884a\",\"appuin\":0,\"parent_id\":11313,\"level\":4,\"name\":\"测试四级\",\"alias\":\"\",\"show\":1,\"show_name\":\"\",\"desc\":\"\",\"order\":0,\"HasChild\":0}]";
// var data = JSON.parse(a);
// f(d: any){
exports.__esModule = true;
// }
var MotifIntervention;
(function (MotifIntervention) {
    MotifIntervention[MotifIntervention["Intrusion"] = 0] = "Intrusion";
    MotifIntervention[MotifIntervention["Identification"] = 1] = "Identification";
    MotifIntervention[MotifIntervention["AbsenceTest"] = 2] = "AbsenceTest";
    MotifIntervention[MotifIntervention["Autre"] = 3] = "Autre";
})(MotifIntervention = exports.MotifIntervention || (exports.MotifIntervention = {}));
// export const CATEGORY_ID = {
//     pgc: 1,
//     ugc: 2,
//     priority_ugc: 3,
//     priority_pgc: 4,
//     safety_ugc: 5,
//     safety_priority_ugc: 6,
//     bef: 7,
//     aft: 8,
//     befhot: 9,
//     afthot: 10,
//   };
//   export const TYPE_ID = {
//     VIDEO: 1,
//     Article: 2,
//     graphic: 2,
//     reply: 3,
//     details: 4,
//     Mixed: 5,
//   };
var CategoryId;
(function (CategoryId) {
    CategoryId[CategoryId["pgc"] = 1] = "pgc";
    CategoryId[CategoryId["ugc"] = 2] = "ugc";
    CategoryId[CategoryId["priority_ugc"] = 3] = "priority_ugc";
    CategoryId[CategoryId["priority_pgc"] = 4] = "priority_pgc";
    CategoryId[CategoryId["safety_ugc"] = 5] = "safety_ugc";
    CategoryId[CategoryId["safety_priority_ugc"] = 6] = "safety_priority_ugc";
    CategoryId[CategoryId["bef"] = 7] = "bef";
    CategoryId[CategoryId["aft"] = 8] = "aft";
    CategoryId[CategoryId["befhot"] = 9] = "befhot";
    CategoryId[CategoryId["afthot"] = 9] = "afthot";
})(CategoryId = exports.CategoryId || (exports.CategoryId = {}));
var TypeId;
(function (TypeId) {
    TypeId[TypeId["VIDEO"] = 1] = "VIDEO";
    TypeId[TypeId["Article"] = 2] = "Article";
    TypeId[TypeId["Graphic"] = 2] = "Graphic";
    TypeId[TypeId["reply"] = 3] = "reply";
    TypeId[TypeId["details"] = 4] = "details";
    TypeId[TypeId["Mixed"] = 5] = "Mixed";
})(TypeId = exports.TypeId || (exports.TypeId = {}));
var jsons = {
    "code": 0,
    "data": {
        "1-1": 17216,
        "1-2": 17298,
        "2-2": 10,
        "4-2": 386858,
        "5-2": 699,
        "7-2": 1,
        "7-3": 1,
        "8-2": 41,
        "8-3": 1,
        "8-4": 61,
        "9-2": 61,
        "9-3": 100
    },
    "message": ""
};
var allPkgSizes = {
    "1-1": 17216,
    "1-2": 17298,
    "2-2": 10,
}
// let acc: { [key: string]: string } = {};
// let tcc;
// for (let c in CategoryId) {
//     if (isNaN(Number(c))) {
//         for (let t in TypeId) {
//             if (isNaN(Number(t))) {
//                 // acc[c + '' + t] = (c + '' + t).toString();
//                 // tcc[CategoryId[c]][TypeId[t]] = (c + '' + t).toString();
//                 console.log(TypeId[t]);
//             }
//         }
//     }
// }
// console.log(tcc);
// Object.keys(MotifIntervention).filter(key => !isNaN(Number(MotifIntervention[key])));
// for (let c in jsons.data) {
//     console.log(c)
// }
for (var c in jsons.data) {
    if (allPkgSizes.hasOwnProperty(c)) {
        console.log('t'+jsons.data[c]);
    }
    else {
        console.log('f'+c);
    }
}
