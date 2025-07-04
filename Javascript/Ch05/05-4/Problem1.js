/*
    정수 배열을 정렬해서 반환하는 solution 함수를 완성하세요.

*/
function solution(arr) {
    arr.sort((a, b) => a - b);
    return arr;
}

// 예시
console.log(solution([1, -5, 2, 4, 3]));
console.log(solution([2, 1, 1, 3, 2, 5, 4]));
console.log(solution([6, 1, 7]));