{
    // const myReg = /[~!@#$%^&*()/\|,.<>?"'();:_+-=\[\]{}]/;

    const str = '测试3##测试3-1,测试3-3,测试3-2,测试3-4;二级标签啊##测试,三级;我再看看##这个加号能点击吗;只限定一级标签后新增，即为新增二级标签##232222;和平精英##123;game一级标签##321;测试3##测试3-1,测试3-3,测试3-2,测试3-4;二级标签啊##测试,三级;我再看看##这个加号能点击吗;只限定一级标签后新增，即为新增二级标签##232222;和平精英##123;game一级标签##321;';

    // const myR = new RegExp("\,");

    // let as = str.split(';');

    // console.log(as);

    // const map: Map<string, string[]> = new Map<string, string[]>();
    // if (str) {
    //     const strArray = str.split(';');
    //     strArray.forEach(x => {
    //         const index = x.indexOf('#');
    //         const key = x.substring(0, index);
    //         const valueString = x.substring(index + 1);
    //         const value = valueString.split(',');
    //         map[key] = value;
    //     });
    // }
    // console.log(map);

    // let dt = Date.now();

    // console.log(dt)
    // formatDate(date: Date): string {
    //     if (!date) {
    //       return '';
    //     }
    //     return date.getFullYear() + '-' +
    //       this.addZero(date.getMonth() + 1) + '-' +
    //       this.addZero(date.getDate()) + ' ' +
    //       this.addZero(date.getHours()) + ':' +
    //       this.addZero(date.getMinutes()) + ':' +
    //       this.addZero(date.getSeconds());
    //   }
    
    //   addZero(num: number): string {
    //     return num < 10 ? '0' + num : num.toString();
    //   }
    


    const value = this.customTagsMap['name'] ? this.customTagsMap['name'] : '';

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