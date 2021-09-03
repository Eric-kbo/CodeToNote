
seatload() {
    this.correctSeatList.page_size = 5;
    this.correctSeatList.page_no = 1;
    this.seatLimit();
},
seatSizeChange(pageSize) {
    this.correctSeatList.page_size = pageSize;
    this.seatLimit();
},
seatCurChange(currentPage) {
    this.correctSeatList.page_no = currentPage;
    this.seatLimit();
},
seatLimit() {
    this.correctSeatList.total = this.data.correct_seats.length;
    let from = (this.correctSeatList.page_no - 1) * this.correctSeatList.page_size;
    const to = this.correctSeatList.page_no * this.correctSeatList.page_size;
    this.correctSeatList.list = [];
    for (; from < to; from++) {
        if (this.data.correct_seats[from]) {
            this.correctSeatList.list.push(this.data.correct_seats[from]);
        }
    }
},