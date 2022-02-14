var data = require('./source.json')
function _typeof(obj) {
    var s = Object.prototype.toString.call(obj);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

var objKeys = Object.keys(data)

// console.log(objKeys)

var list = [];


objKeys.forEach(item => {
    var str = '';
    switch (_typeof(data[item])) {
        case 'number':
            str = item + '?:number'
            break;
        case 'string':
            str = item + '?:string'
            break;
        case 'boolean':
            str = item + '?:boolean'
            break;
        case 'null':
        default:
            console.log(`Sorry, }.` + item);
            throw "有错误哦：看下这个字段" + item;
    }
    list.push(str);
});
console.log(list.join(';'))

