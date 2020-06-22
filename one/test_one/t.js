menu = {
    "code": 0, "data": [{
        "children":
            [
                { "children": null, "expanded": false, "group": false, "home": false, "icon": "", "link": "/portal", "menuId": "f786c4427dc811e9b2936c92bf24a937", "menuMemo": "", "operationCode": "ev_product_verify_todo", "parentID": "f7728c2c7dc811e9b2936c92bf24a937", "pathMatch": "full", "queryParams": {}, "serialIndex": 1, "skipLocationChange": false, "target": "", "title": "待办", "url": "" },
                { "children": null, "expanded": false, "group": false, "home": false, "icon": "", "link": "/verify-search-priority", "menuId": "f7a854737dc811e9b2936c92bf24a937", "menuMemo": "", "operationCode": "ev_product_verify_search", "parentID": "f7728c2c7dc811e9b2936c92bf24a937", "pathMatch": "full", "queryParams": {}, "serialIndex": 2, "skipLocationChange": false, "target": "", "title": "优先审核查询", "url": "" },
                { "children": null, "expanded": false, "group": false, "home": false, "icon": "", "link": "/verify-search-ordinary", "menuId": "f7c93f4e7dc811e9b2936c92bf24a937", "menuMemo": "", "operationCode": "ev_product_verify_search", "parentID": "f7728c2c7dc811e9b2936c92bf24a937", "pathMatch": "full", "queryParams": {}, "serialIndex": 3, "skipLocationChange": false, "target": "", "title": "普通审核查询", "url": "" },
                { "children": null, "expanded": false, "group": false, "home": false, "icon": "", "link": "/verify-search-mutual", "menuId": "f7fdbca27dc811e9b2936c92bf24a937", "menuMemo": "", "operationCode": "ev_product_verify_search", "parentID": "f7728c2c7dc811e9b2936c92bf24a937", "pathMatch": "full", "queryParams": {}, "serialIndex": 4, "skipLocationChange": false, "target": "", "title": "互检查询", "url": "" }], "expanded": false, "group": false, "home": false, "icon": "nb-compose", "link": "", "menuId": "f7728c2c7dc811e9b2936c92bf24a937", "menuMemo": "", "operationCode": "ev_product_verify", "parentID": "", "pathMatch": "", "queryParams": {}, "serialIndex": 2, "skipLocationChange": false, "target": "", "title": "工单审核", "url": ""
    }
        , {
        "children": [
            { "children": null, "expanded": false, "group": false, "home": false, "icon": "", "link": "/statistics-priority-personal", "menuId": "f8593ed37dc811e9b2936c92bf24a937", "menuMemo": "", "operationCode": "ev_product_verify_report_search", "parentID": "f83719b17dc811e9b2936c92bf24a937", "pathMatch": "full", "queryParams": {}, "serialIndex": 1, "skipLocationChange": false, "target": "", "title": "优先审核", "url": "" },
            { "children": null, "expanded": false, "group": false, "home": false, "icon": "", "link": "/statistics-ordinary-personal", "menuId": "f880e0047dc811e9b2936c92bf24a937", "menuMemo": "", "operationCode": "ev_product_verify_report_search", "parentID": "f83719b17dc811e9b2936c92bf24a937", "pathMatch": "full", "queryParams": {}, "serialIndex": 2, "skipLocationChange": false, "target": "", "title": "普通审核", "url": "" },
            { "children": null, "expanded": false, "group": false, "home": false, "icon": "", "link": "/statistics-mutual-personal", "menuId": "f8dbe3997dc811e9b2936c92bf24a937", "menuMemo": "", "operationCode": "ev_product_verify_report_search", "parentID": "f83719b17dc811e9b2936c92bf24a937", "pathMatch": "full", "queryParams": {}, "serialIndex": 3, "skipLocationChange": false, "target": "", "title": "互检", "url": "" }], "expanded": false, "group": false, "home": false, "icon": "nb-bar-chart", "link": "", "menuId": "f83719b17dc811e9b2936c92bf24a937", "menuMemo": "", "operationCode": "ev_product_verify_report", "parentID": "", "pathMatch": "", "queryParams": {}, "serialIndex": 3, "skipLocationChange": false, "target": "", "title": "个人工单报表", "url": ""
    }], "message": ""
}


// console.log(menu);
var datas = [];

menu.data.forEach(item => {
    fp(item);
});

// fp(menu.data[0]);
console.log(datas)

if (datas) {
    const windowLink = 'https://test.tcp.tencent.com/mpv/#/portal';
    // datas.forEach(x => {
    //     // return new RegExp(x).test(windowLink);
    //     console.log(new RegExp(x).test(windowLink))
    // })
    console.log(windowLink)
    console.log(datas.find(x => new RegExp(x).test(windowLink)));
}



function fp(m) {
    if (m.children) {
        m.children.forEach(element => {
            fp(element);
        });
    }
    // console.log(m.link);
    if (m.link != '') {
        datas.push(m.link);
    }
}
