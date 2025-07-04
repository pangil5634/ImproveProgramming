function solution(arr1, arr2) {
    const r1 = arr1.length;
    const c1 = arr1[0].length;
    const r2 = arr2.length;
    const c2 = arr2[0].length;

    const ret = [];
    for(let i = 0; i < r1; i++) {
        ret.push(new Array(c2).fill(0));
    }   

    for(let i = 0; i < r1; i++) {
        for(let j = 0; j < c2; j++) {
            for(let k = 0; k < c1; k++) {
                ret[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }

    return ret;
}

// 예시
console.log(solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]])); // [[21, 21], [15, 15], [21, 21]]
console.log(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]])); // [[28, 32, 19], [38, 32, 28], [27, 20, 16]]