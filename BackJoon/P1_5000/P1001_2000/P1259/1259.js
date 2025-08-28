// const fs = require('fs');

// // 입력을 읽어옴
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

// function getIsPalindrome(num) {
//     let length = num.length;
//     let half = Math.floor(Number(length) / 2);
//     for (let i = 0; i < half; i++){
//         if (num[i] !== num[length - 1]) {
//             return "no";
//         }
//         length--;
//     }
//     return "yes";
// }

// while (1) {
//     const num = input[0];
//     input.shift();
    
//     if (num === '0') {
//         break;
//     } else {
//         console.log(getIsPalindrome(num));  
//     }
    
    
// }

const fs = require('fs');

// 입력 전체를 읽어와 줄 단위로 나눔
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

// 팰린드롬 판별 함수
function getIsPalindrome(num) {
    const length = num.length; // 문자열 길이 저장
    const half = Math.floor(length / 2); // 절반까지만 비교하면 충분함
    for (let i = 0; i < half; i++) {
        // 양쪽 끝에서 안쪽으로 비교
        if (num[i] !== num[length - 1 - i]) {
            return "no"; // 하나라도 다르면 팰린드롬 아님
        }
    }
    return "yes"; // 모든 비교가 통과되면 팰린드롬
}

// 입력 줄 전체를 순회
for (let i = 0; i < input.length; i++) {
    const num = input[i]; // 현재 숫자 문자열
    if (num === '0') break; // 0이면 종료
    console.log(getIsPalindrome(num)); // 팰린드롬 여부 출력
}