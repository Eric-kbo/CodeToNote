
let a = true;
for (let index = 1; true; index++) {
    if (index % 1 == 0) {
        if (index % 2 == 0) {
            if (index % 3 == 0) {
                if (index % 4 == 0) {
                    if (index % 5 == 0) {
                        console.log(index)
                        break;
                    }
                }
            }
        }
    }
}