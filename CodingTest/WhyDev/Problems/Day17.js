// 문제: 대소문자를 구분하지 않고 사전순으로 가장 앞서는 단어 찾기

// 파일 시스템 모듈 불러오기
const fs = require('fs');

// 입력값을 한 줄씩 배열로 저장
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

// 무한 반복문 시작
while (true){
    // 1. 단어의 개수 입력받기
    const num = Number(input.shift());
    // 2. 0이 입력되면 반복문 종료
    if (num === 0) {
        break;
    }

    // 3. 단어들을 저장할 배열 생성
    const wordList = []
    // 4. 입력받은 개수만큼 단어 입력받아 배열에 저장
    for (let i = 0; i < num; i++) {
        wordList.push(input.shift());
    }

    // 5. 대소문자 구분 없이 사전순 정렬
    wordList.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    // 6. 가장 앞서는 단어 출력
    console.log(wordList[0]);
}

