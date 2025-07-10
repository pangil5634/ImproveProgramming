//  문제 내용
/*
    어떤 반에 있는 학생들의 생일이 주어졌을 때, 가장 나이가 적은 사람과 가장 많은 사람을 구하는 프로그램을 작성하시오.
*/

//  문제 분석
/*
    - 가장 나이 적은 사람과 가장 나이 많은 사람을 찾기
*/

//  문제 조건

/*
    입력
    - 첫째 줄에 반에 있는 학생의 수 n이 주어진다. (1 ≤ n ≤ 100)
    - 다음 n개 줄에는 각 학생의 이름과 생일이 "이름 dd mm yyyy"와 같은 형식으로 주어진다. 이름은 그 학생의 이름이며, 최대 15글자로 이루어져 있다. dd mm yyyy는 생일 일, 월, 연도이다. (1990 ≤ yyyy ≤ 2010, 1 ≤ mm ≤ 12, 1 ≤ dd ≤ 31) 주어지는 생일은 올바른 날짜이며, 연, 월 일은 0으로 시작하지 않는다.
    - 이름이 같거나, 생일이 같은 사람은 없다.
    출력
    - 첫째 줄에 가장 나이가 적은 사람의 이름, 둘째 줄에 가장 나이가 많은 사람 이름을 출력한다.
*/

//  예제 입력 및 출력
/*
    입력
    5
    Mickey 1 10 1991
    Alice 30 12 1990
    Tom 15 8 1993
    Jerry 18 9 1990
    Garfield 20 9 1990

    출력
    Tom
    Jerry
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
// 첫 줄은 회원 수 N, 그 다음 줄부터는 [이름 일 월 년] 형식의 회원 정보
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// Member 클래스 정의: 이름, 생년월일을 속성으로 가짐
class Member {
    constructor({ name, day, month, year }) {
        this.name = name;       // 이름
        this.day = day;         // 일
        this.month = month;     // 월
        this.year = year;       // 년
    }
}

// 회원 정보를 담을 배열
let memberInfos = [];

// 입력 줄의 두 번째 줄부터 끝까지 반복하며 Member 객체로 변환
for (let i = 1; i < input.length; i++) {
    const data = input[i].split(" "); // 공백 기준으로 [이름, 일, 월, 년] 분리
    const memberInfo = new Member({
        name : data[0],
        day: Number(data[1]),
        month: Number(data[2]),
        year: Number(data[3])
    });
    memberInfos.push(memberInfo); // Member 객체를 배열에 추가
}

// 생일이 가장 늦은(어린) 순으로 정렬
// 기준: 년도 내림차순 → 월 내림차순 → 일 내림차순
memberInfos.sort((a, b) => 
    b.year - a.year || 
    b.month - a.month || 
    b.day - a.day
);

// 가장 생일이 늦은(어린) 사람의 이름 출력
console.log(memberInfos[0].name);

// 가장 생일이 빠른(나이 많은) 사람의 이름 출력
console.log(memberInfos[memberInfos.length - 1].name);
