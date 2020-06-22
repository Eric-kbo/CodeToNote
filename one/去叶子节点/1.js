var fs = require("fs");

// 异步读取
// fs.readFile('one/去叶子节点/1.xml', function (err, data) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log("异步读取: " + data.toString());
// });

// 同步读取
var data = fs.readFileSync('one/去叶子节点/2.xml');
// console.log("同步读取: " + data.toString());


function createXml(str) {
        return new DOMParser().parseFromString(str, "xml");
}

var xmlData = createXml(data.toString());

console.log(xmlData)

// 首先对xml对象进行判断
// var checkXMLDocObj = function (xmlData) {
//     var xmlDoc = loadXML(xmlData);
//     if (xmlDoc == null) {
//         alert('您的浏览器不支持xml文件读取,于是本页面禁止您的操作,推荐使用IE5.0以上可以解决此问题!');
//         window.location.href = '../err.html';

//     }
//     return xmlDoc;
// }
// var xmlDoc = checkXMLDocObj('/static/location/LocList.xml');//读取到xml文件中的数据

// //JS读取 XML 文件中的 area 节点的方式如下:
// var nodeList = xmlDoc.documentElement.getElementsByTagName("area") ； // IE
// for (var i = 0; i < nodeList.length; i++) {
//     //...遍历操作...
// }
// var nodeList = xmlDoc.getElementsByTagName("area"); // 非IE
// for (var i = 0; i < nodeList.length; i++) {
//     //...遍历操作...
// }