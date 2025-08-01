const fs = require('fs');

// 입력을 읽어옴
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

function getIsPalindrome(num) {
    let length = num.length;
    let half = Math.floor(Number(length) / 2);
    for (let i = 0; i < half; i++){
        if (num[i] !== num[length - 1]) {
            return "no";
        }
        length--;
    }
    return "yes";
}

while (1) {
    const num = input[0];
    input.shift();
    
    if (num === '0') {
        break;
    } else {
        console.log(getIsPalindrome(num));  
    }
    
    
}