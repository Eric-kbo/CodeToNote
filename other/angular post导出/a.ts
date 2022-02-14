 // post方式下载文件
  getFile(commonParams: CommonParameters, conditions: Condition[], headData: ColumnData[]) {


    const params = {
      category_id: commonParams.category_id,
      type_id: commonParams.type_id,
      flow_name: commonParams.flow_name,
      step: commonParams.step,
      page: ExportAmount.PageIndex,
      page_size: ExportAmount.PageSize,
      conditions: conditions,
      userId: this.user.userId,
      userName: this.user.loginName,
      headData: headData
    };

    //
    // let head = new Headers({'Content-Type': 'application/json'});
    // let url = this.baseUrl + "user/exportExcel";
    // let body = ["343434", "343434", "34342323", "34rty6y654"];
    // let b = JSON.stringify(body);
    // // let options = new RequestOptions({headers: head, responseType: 3});
    // return this.http.post<any>(`${this.baseUrl}/processExports`, params, {headers: this.httpHeader}).toPromise().then(
    //   res => {
    //     var byteArray = new Uint8Array(res);
    //     var a = window.document.createElement('a');
    //     a.href = window.URL.createObjectURL(new Blob([byteArray], {type: 'application/vnd.ms-excel'}));
    //
    //     // supply your own fileName here...
    //     a.download = "YourFileName.xlsx";
    //     document.body.appendChild(a);
    //     a.click();
    //     document.body.removeChild(a);
    //     // var blob=new Blob([resultByte], {type: "application/pdf"});
    //     //
    //     // let file = new File([res], "mm.xls", {type: "application/vnd.ms-excel"});
    //     // var objUrl = URL.createObjectURL(res);
    //     // window.open(objUrl);
    //     // URL.revokeObjectURL(objUrl)
    //
    //   });


    this.http.post(`${this.baseUrl}/processExports`, params, {
      responseType: "arraybuffer",
      headers: this.httpHeader
    }).subscribe(resp => {
      // resp: 文件流
      this.downloadFile(resp);
    })

  }

  downloadFile(data) {
    // 下载类型 xls
    const contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    // const contentType = 'application/vnd.ms-excel';
    // 下载类型：csv
    const contentType2 = 'text/csv';
    const blob = new Blob([data], {type: contentType});
    const url = window.URL.createObjectURL(blob);
    // 打开新窗口方式进行下载
    // window.open(url);

    // 以动态创建a标签进行下载
    const a = document.createElement('a');
    const fileName = '11111';
    a.href = url;
    // a.download = fileName;
    a.download = fileName + '.xlsx';
    a.click();
    window.URL.revokeObjectURL(url);
  }