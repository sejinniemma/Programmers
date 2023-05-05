// function solution(emergency) {
//     var answer = [];
//      const copy = emergency.slice();
//     const obj = sorted(copy);
//     // Create a copy of the emergency array
// console.log(obj)
//     for (let i = 0; i < emergency.length; i++) { 
//         for (let k = 0; k < obj.length; k++) {
//             if (emergency[i] === obj[k]['num']) {
//                 emergency[i] = Number(obj[k]["index"]) + 1;
//             }
//         }
//     }
//     return emergency; // Return the updated copy array
// }
// function sorted(copy) {
//     const sorted = copy.sort(function(a, b) {
//         return b - a;
//     });
//     const obj = sorted.map(function(num, index) {
//         return { num: num, index: index };
//     });
//     return obj;
// }
function solution(emergency) {
    const obj = sorted(emergency);
    for (let i = 0; i < emergency.length; i++) {
        for (let k = 0; k < obj.length; k++) {
            if (emergency[i] == obj[k].num) {
                emergency[i] = Number(obj[k]["index"]) + 1;
                break; // break out of the inner loop once a match is found
            }
        }
    }
    return emergency;
}

function sorted(emergency) {
    const copy = emergency.slice(); // Create a copy of the emergency array
    const sorted = copy.sort(function(a, b) {
        return b - a;
    });
    const obj = sorted.map(function(num, index) {
        return { num: num, index: index };
    });
    return obj;
}