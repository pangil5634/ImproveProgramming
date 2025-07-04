function solution(arr1, arr2) {
    // arr1의 행(row)과 열(column) 길이
    const r1 = arr1.length;
    const c1 = arr1[0].length;
    
    // arr2의 행과 열 길이
    const r2 = arr2.length;
    const c2 = arr2[0].length;

    // 결과 행렬 ret 초기화: 크기는 r1 x c2, 모든 값을 0으로 초기화
    const ret = [];
    for(let i = 0; i < r1; i++) {
        ret.push(new Array(c2).fill(0));
    }

    // 행렬 곱셈 수행
    // arr1의 i번째 행과 arr2의 j번째 열을 곱해서 ret[i][j]에 저장
    for(let i = 0; i < r1; i++) {
        for(let j = 0; j < c2; j++) {
            for(let k = 0; k < c1; k++) {
                // arr1[i][k]와 arr2[k][j]를 곱해서 누적합
                ret[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }

    // 계산된 결과 행렬 반환
    return ret;
}

// 예시 실행
console.log(solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]])); 
// [[1*3 + 4*3, 1*3 + 4*3], [3*3 + 2*3, 3*3 + 2*3], [4*3 + 1*3, 4*3 + 1*3]]
// [[21, 21], [15, 15], [21, 21]]

console.log(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]]));
// 각 요소는 arr1의 행과 arr2의 열을 곱하고 더한 값
