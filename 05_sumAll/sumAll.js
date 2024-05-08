const sumAll = function(int1, int2) {
    if (int1 < 0 || int2 < 0) {
        return 'ERROR';
    }
    if (typeof int1 != 'number' || typeof int2 != 'number') {
        return 'ERROR';
    }
    let newRange = [];
    let newSum = 0;
    for (let currentPoint = int1 < int2 ? int1: int2; currentPoint <= findMax(int1, int2); currentPoint++) {
        newSum += currentPoint
    }
    return newSum;
}
function findMax (x, y) {
    if (x > y) {
        return x;
    }
    else { 
        return y; 
    }
}
//const sumAll = function(int1, int2) {
//    let newRange = [];
//    let newSum = 0;
//    for (let currentPoint = int1; currentPoint <= int2; currentPoint++) {
//        newSum += currentPoint
//    }
//   return newSum;
//}

// Do not edit below this line
module.exports = sumAll;
