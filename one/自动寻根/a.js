

// console.info()
// var rf= require("fs");
// var data=rf.readFileSync("./source.json","utf-8");
// console.log(data);


var fs = require("fs");

// // 异步读取
// fs.readFile('one/自动寻根/source.json', function (err, data) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("异步读取: " + data.toString());
// });

// // 同步读取
// var data = fs.readFileSync('one/自动寻根/source.json');
// console.log("同步读取: " + data.toString());

// console.log("程序执行完毕。");
var data = fs.readFileSync('one/自动寻根/source.json');
var d = JSON.parse(data.toString());
console.log(data.toString());
console.log(d["a"]);