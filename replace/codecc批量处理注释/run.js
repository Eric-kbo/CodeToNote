const args = process.argv.slice(2)
var fs = require("fs");
var path = require('path')
// var theFilePath = path.resolve(args[0] ? args[0] : './replace/codecc批量处理注释/test')
var theFilePath = path.resolve('./')
var fileNameList = [];
// var data = fs.readFileSync('one/正则替换文本/a.go');
// console.log(data.toString());
console.log(theFilePath)

fileDisplay(theFilePath)

function fileDisplay(filePath) {
    //根据文件路径读取文件，返回文件列表
    fs.readdir(filePath, function (err, files) {
        if (!err) {
            files.forEach((file, index) => {
                if (file != 'run.js') {
                    var filedir = path.join(filePath, file);
                    var status = fs.lstatSync(filedir)
                    if (status.isFile()) {
                        // console.log(index + " : " + file + " : " + filedir)
                        changeFile(filedir)
                    } else {
                        fileDisplay(filedir)
                    }
                }
            })
        }
    });
}

function changeFile(filePath) {
    var content = fs.readFileSync(filePath, 'utf-8');

    var isR = false;
    var list = content.split('\n');
    if (list.length <= 0) {
        var list = content.split('\r');
        isR = true;
    }
    var text = '';

    for (var i = 0; i < list.length; i++) {
        if (backRegx(list[i])) {
            console.log(list[i])
            if (list[i + 1]) {
                if (checkFunc(list[i + 1])) {
                    var funStr = list[i].trim()
                    text += funStr + ' 方法' + '\n';
                }
                else if (checkType(list[i + 1])) {
                    var typeStr = list[i].trim()
                    text += typeStr + ' 结构体' + '\n';
                } else {
                    text += list[i] + '\n'
                }
            } else {
                text += list[i] + '\n'
            }

        } else {
            text += list[i] + '\n'
        }
    }

    fs.writeFile(filePath, text, 'utf-8', (err) => {
        if (err) {
            console.log(filePath + '----> fail')
        } else {
            console.log(filePath + '---->   ok')
        }
    })
}

var regexStr = /^\/\/(.*)/
function backRegx(str) {
    if (regexStr.test(str.trim())) {
        return true
    }
    return false
}

var regexFunc = /func(.*)/
function checkFunc(str) {
    if (regexFunc.test(str.trim())) {
        return true
    }
    return false
}

var regexType = /type(.*)/
function checkType(str) {
    if (regexType.test(str.trim())) {
        return true
    }
    return false
}