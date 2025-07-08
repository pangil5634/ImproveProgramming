//  문제 내용
/*
    알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.

    길이가 짧은 것부터
    길이가 같으면 사전 순으로
    단, 중복된 단어는 하나만 남기고 제거해야 한다.
*/

//  문제 분석
/*
    - 알파벳 소문자로 이루어진 N개의 단어
    - 짧은 길이부터 정렬
    - 길이 같으면 사전 순으로 (오름차순 정렬)
    - 중복되지 않아야 함.
*/

//  문제 조건

/*
    입력
    - 첫째 줄에 단어의 개수 N이 주어진다. (1 ≤ N ≤ 20,000) 
    - 둘째 줄부터 N개의 줄에 걸쳐 알파벳 소문자로 이루어진 단어가 한 줄에 하나씩 주어진다. 
    - 주어지는 문자열의 길이는 50을 넘지 않는다.
    출력
    - 조건에 따라 정렬하여 단어들을 출력한다.
*/

//  예제 입력 및 출력
/*
    입력
    13
    but
    i
    wont
    hesitate
    no
    more
    no
    more
    it
    cannot
    wait
    im
    yours

    출력
    i
    im
    it
    no
    but
    more
    wait
    wont
    yours
    cannot
    hesitate
*/

// 문제 풀이
/*
    - 목표 : 입력된 문자열을 길이가 짧은 순으로 정렬하여 출력한다.

    1. 오로지 영어 알파벳으로 구성된 문자열만 저장해야 한다. -> !Number() 메소드를 사용하여 문자열만 포함한다.
    2. 중복된 영어 단어는 한 번만 저장해야 한다. -> new Set() 메소드를 사용하여 중복을 제거한다.
    3. 길이가 같으면 영어 알파벳 순으로 정렬해야 한다. -> length 메소드를 사용하여 길이 비교 후 오름차순 정렬하고, 길이가 같은 경우 localeCompare 메소드를 사용하여 사전식으로 정렬한다.
*/


const fs = require('fs');

// 입력을 한 줄씩 받아와 문자열 배열로 변환
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫 줄은 단어의 개수 N → 필요 없으므로 제거
input.shift();

// 중복 제거: Set을 이용하여 동일한 단어는 하나만 남긴다
const setArr = new Set(input);

// 정렬 수행:
// 1. 길이 오름차순 정렬
// 2. 길이가 같다면 사전 순으로 정렬
const onlyStringArr = Array.from(setArr).sort((a, b) => {
  return a.length === b.length
    ? a.localeCompare(b)  // 길이가 같으면 사전순 비교
    : a.length - b.length; // 길이 기준 오름차순
});

// 결과를 개행 문자로 합쳐 출력
const result = onlyStringArr.join('\n');
console.log(result);



/*
    1. Set은 정렬이 안 된다.
    2. localeCompare
*/