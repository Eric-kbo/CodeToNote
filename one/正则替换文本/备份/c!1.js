
var fs = require("fs");
var path = require('path')
var regexText = ''
var rootPath = ''
var oldChangestr = ''
var changestr = '';

function startChange(regexText, rootPath, oldChangestr, changestr) {
    this.regexText = regexText;
    this.rootPath = rootPath;
    this.oldChangestr = oldChangestr;
    this.changestr = changestr;
    if (!regexText || !rootPath || !oldChangestr || !changestr) {
        alert("有空值！条件必填")
    } else {
        fileDisplay(rootPath)
    }
}

// var theFilePath = path.resolve('./one/正则替换文本/test')
// var theFilePath = path.resolve('./')
var fileNameList = [];
// var data = fs.readFileSync('one/正则替换文本/a.go');
// console.log(data.toString());


function fileDisplay(filePath) {
    //根据文件路径读取文件，返回文件列表
    fs.readdir(filePath, function (err, files) {
        if (!err) {
            files.forEach((file, index) => {
                if (file != 'c!1.js') {
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
    // var regexStr = /ctx.JSON\(http.StatusInternalServerError(.*)(?<!err.Error\(\)\}\))$/
    var regexStr = new RegExp(regexText)

    var isR = false;
    var list = content.split('\n');
    if (list.length <= 0) {
        var list = content.split('\r');
        isR = true;
    }
    var text = '';
    list.forEach(a => {
        if (regexStr.test(a.trim())) {
            console.log(a)
            text += a.replace(oldChangestr, changestr) + '\n';
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