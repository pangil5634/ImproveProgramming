//  문제 내용
/*
    온라인 저지에 가입한 사람들의 나이와 이름이 가입한 순서대로 주어진다. 
    
    이때, 회원들을 나이가 증가하는 순으로, 나이가 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬하는 프로그램을 작성하시오.
*/

//  문제 분석
/*
    - 9명의 난쟁이.
    - 7명의 난쟁이 키의 합이 100.
*/

//  문제 조건

/*
    입력
    - 첫째 줄에 온라인 저지 회원의 수 N이 주어진다. (1 ≤ N ≤ 100,000)
    - 둘째 줄부터 N개의 줄에는 각 회원의 나이와 이름이 공백으로 구분되어 주어진다. 
    - 나이는 1보다 크거나 같으며, 200보다 작거나 같은 정수이고, 이름은 알파벳 대소문자로 이루어져 있고, 길이가 100보다 작거나 같은 문자열이다. 
    - 입력은 가입한 순서로 주어진다.
    출력
    - 첫째 줄부터 총 N개의 줄에 걸쳐 온라인 저지 회원을 나이 순, 나이가 같으면 가입한 순으로 한 줄에 한 명씩 나이와 이름을 공백으로 구분해 출력한다.
*/

//  예제 입력 및 출력
/*
    입력
    3
    21 Junkyu
    21 Dohyun
    20 Sunyoung

    출력
    20 Sunyoung
    21 Junkyu
    21 Dohyun
*/

// 문제 풀이
/*
    - 목표 : 회원 수 만큼, 회원을 나이 순, 나가 같으면 가입한 순으로 한 줄에 한 명씩 나이와 이름을 공백으로 구분해 출력한다.
*/

const fs = require('fs');

// 입력을 한 줄씩 받아와 문자열 배열로 변환
// 첫 줄은 회원 수 N, 그 다음 줄부터는 [나이 이름] 형식의 회원 정보
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// Member 클래스 정의: 나이, 이름, 입력된 순서(idx)를 속성으로 가짐
class Member {
    constructor({ age, name, idx }) {
        this.age = age;
        this.name = name;
        this.idx = idx; // 입력 순서를 기억하여 안정 정렬을 흉내냄
    }
}

// 회원 정보를 담을 배열
let memberInfos = [];

// 입력 줄의 두 번째 줄부터 끝까지 반복하며 Member 객체로 변환
for (let i = 1; i < input.length; i++) {
    const data = input[i].split(" "); // 공백으로 나이와 이름 분리
    const memberInfo = new Member({ age: Number(data[0]), name: data[1], idx: i }); // age를 숫자로 변환
    memberInfos.push(memberInfo); // 배열에 저장
}

// 정렬 수행: 
// 1. 나이가 적은 순으로 정렬
// 2. 나이가 같으면 입력 순서(idx)가 빠른 순으로 정렬
const sortedMemberInfos = memberInfos.sort((a, b) => a.age - b.age || a.idx - b.idx);

// 출력 최적화:
// 각 회원 정보를 "나이 이름" 형식으로 만든 후 join으로 하나의 문자열로 병합
const result = sortedMemberInfos.map(data => `${data.age} ${data.name}`).join('\n');

// 출력은 단 한 번만 console.log로 실행 (속도 개선)
console.log(result);

/*
    고민1 : 입력받은 값을 어떻게 파싱할 수 있을까? 
    -> 입력은 fs.readFileSync + split으로 처리 (백준 표준 입력 방식)
    고민2 : 파싱된 데이터를 어떻게 조건대로 정렬할 수 있을까?
    -> 안정 정렬이 필요하므로, 나이가 같을 경우 입력 순서를 기억하는 idx 사용
    고민3 : 실행 시간이 무려 3000ms대, 어떻게 줄일 수 있을까?
    -> console.log를 N번 호출하면 느려지므로, join 후 한 번만 출력하여 성능 개선
*/
