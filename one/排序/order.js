var infoObj=[
    {
        name:"张三",
        sex:'female',
        age:30
    },
    {
        name:"李四",
        sex:'male',
        age:20
    },
    {
        name:"王五",
        sex:'female',
        age:40
    }
];
// 指定排序的比较函数
function compare(property){
 return function(obj1,obj2){
     var value1 = obj1[property];
     var value2 = obj2[property];
     return value1 - value2;     // 升序
 }
}
var sortObj = infoObj.sort(compare("age"));
console.log(sortObj); //