
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

console.log(addTwoNumbers(l1, l2))

function addTwoNumbers(l1, l2) {
    l1.val += l2.val;
    if (l1.val > 9) {
        var a = l1.val - 10;
        if (l1.next) {
            l1.next.val += 1;
            l1.val = l1.val - 10;
        } else {
            var b = {
                val: 0
            }
            l1.val = a;
            l1.next = b;
        }
    }
    if (!l1.next) {
        var b = {
            val: 0
        }
        l1.val = a;
        l1.next = b;
    }

    if (l1.next || l2.next) {
        addTwoNumbers(l1.next ? l1.next : { val: 0 }, l2.next ? l2.next : { val: 0 })
    }

    return l1;
};