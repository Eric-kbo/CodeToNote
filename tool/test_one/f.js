function f(data, a, b) {
    if(data <= 10) {
        var cc = (data % 2)
        if (cc > 0) {
            a.push(data)
        } else {
            b.push(data)
        }
        data += 1;

        f(data, a, b)
    }
}

var a =[]
var b =[];
f(1, a, b)
console.log(a)
console.log(b)