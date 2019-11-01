function a() {
    var s = [112, 101, 110, 32, 115, 111, 117, 114, 99, 101,]
    var t = String.fromCharCode(111);
    s.forEach(element => {
        t += String.fromCharCode(element);
    });
    console.log(t);
}

a();