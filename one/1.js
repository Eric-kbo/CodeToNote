


// var audit_result_tag = '不推荐'
// var reject_reason = undefined


// if (audit_result_tag === '不推荐') {
//     let arr = reject_reason.split(';');
//     console.log(arr);
//     console.log(true);
// } else {
//     console.log(false);
// }



// var idArr = ['q', 'a']
// var arr = ['sdfadfafd','11111']
// console.log(idArr.find(x => x === 'q'));
// console.log(arr[idArr.indexOf(idArr.find(x => x === 'a'))]);
export enum MotifIntervention {
    Intrusion,
    Identification,
    AbsenceTest,
    Autre
}

for (let motif in MotifIntervention) {
    console.log( motif );
}