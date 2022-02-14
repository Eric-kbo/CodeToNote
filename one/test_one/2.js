var tag_ids = "wx1d0a2931e0e8a2b0;wx8d08365c0c59884a#wx4aee7762eb1ef5e7;wx8d08365c0c59884a#wxa450ef83412bfa94;wx8d08365c0c59884a,wx4aee7762eb1ef5e7,wxa450ef83412bfa94#"
var tag_names = "云裳羽衣;gametest12#测试游戏;gametest12#全民冠军足球;gametest12,测试游戏,全民冠军足球#"


let tagIds = [];
let tagNames = [];
let firstIds = [];
let secondIds = [];
tagIds = tag_ids.split('#');
tagNames = tag_names.split('#');

tagIds.forEach(a => {
    firstIds.push(a.split(';')[0]);
    secondIds.push(a.split(';')[1]);
})

console.log(firstIds)
console.log(secondIds)