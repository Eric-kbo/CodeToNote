{
    // const myReg = /[~!@#$%^&*()/\|,.<>?"'();:_+-=\[\]{}]/;
    var str = '测试3##测试3-1,测试3-3,测试3-2,测试3-4;二级标签啊##测试,三级;我再看看##这个加号能点击吗;只限定一级标签后新增，即为新增二级标签##232222;和平精英##123;game一级标签##321;测试3##测试3-1,测试3-3,测试3-2,测试3-4;二级标签啊##测试,三级;我再看看##这个加号能点击吗;只限定一级标签后新增，即为新增二级标签##232222;和平精英##123;game一级标签##321;';
    // const myR = new RegExp("\,");
    // let as = str.split(';');
    // console.log(as);
    var map_1 = new Map();
    if (str) {
        var strArray = str.split(';');
        strArray.forEach(function (x) {
            var index = x.indexOf('#');
            var key = x.substring(0, index);
            var valueString = x.substring(index + 2);
            var value = valueString.split(',');
            map_1[key] = value;
        });
    }
    console.log(map_1);
    const value = map_1['name'] ? map_1['name'] : '123123';
    console.log(value);

    customTagsMap: Map();
    console.log(customTagsMap['1'])

    var values = customTagsMap['name'] ? customTagsMap['name'] : '';
}
// const myReg = new RegExp("[^a-zA-Z0-9\_\u4e00-\u9fa5]");
// let USER_ACCOUNT = '12313 213';
// let errMsg = '';
// if (myReg.test(USER_ACCOUNT)) {
//     errMsg = '账号名不允许含有特殊字符' + errMsg + '\r\n';
// }
// console.log(USER_ACCOUNT);
// console.log(errMsg);
// var pat=new RegExp("[^a-zA-Z0-9\_\u4e00-\u9fa5]","i"); 
//       var strTest = '12313213@';
//       console.log(pat.test(strTest));
// 	//   if(pat.test(strTest)) 
// 	//   { 
// 	//       showMess("项目名称中含有非法字符"); 
// 	//       return false; 
// 	//   }
