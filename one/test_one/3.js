
var l1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: {
                val: 9,
                next: {
                    val: 9
                }
            }
        }
    }
}
var l2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: {
                val: 9,
                next: {
                    val: 9,
                    next: {
                        val: 9,
                        next: {
                            val: 9,
                        }
                    }
                }
            }
        }
    }
}
// var b = a(l1, l2)
// console.log(b)

console.log(a(l1, l2, [], []))

function a(l1, l2, s, b) {
    if (l1.next != undefined) {
        a(l1.next, l2.next, s, b)
    }
    s.push(l1.val)
    b.push(l2.val)
    return s
    // console.log(s)
    // console.log(b)
}

function gc(list,a){
    
}