const args = process.argv.slice(2)
var fs = require("fs");
var path = require('path')
var theFilePath = path.resolve(args[0] ? args[0] : './one/正则替换文本/test')
// var theFilePath = path.resolve('./')
var fileNameList = [];
// var data = fs.readFileSync('one/正则替换文本/a.go');
// console.log(data.toString());

fileDisplay(theFilePath)

function fileDisplay(filePath) {
    //根据文件路径读取文件，返回文件列表
    fs.readdir(filePath, function (err, files) {
        if (!err) {
            files.forEach((file, index) => {
                if (file != 'changeText.js') {
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
    list.forEach(a => {
        if (backRegx(a)) {
            console.log(a)
            text += a.replace('StatusInternalServerError', 'StatusOK') + '\n';
        } else {
            text += a + '\n'
        }
    })

    fs.writeFile(filePath, text, 'utf-8', (err) => {
        if (err) {
            console.log(filePath + '----> fail')
        } else {
            console.log(filePath + '---->   ok')
        }
    })
}

var regexStr = /ctx.JSON\(http.StatusInternalServerError(.*)(?<!err.Error\(\)\}\))$/
var regexStr2 = /ctx.JSON\(http.StatusInternalServerError(.*)(?<!bizErr.Error\(\)\}\))$/
var elseStr = 'ctx.JSON(http.StatusInternalServerError, models.Response{Code: -1, Message: err.Error()})';
function backRegx(str) {
    if (regexStr.test(str.trim())) {
        if (regexStr2.test(str.trim())) {
            return true
        }
    }
    else if (str.trim() == elseStr) {
        return true
    }
    return false
}