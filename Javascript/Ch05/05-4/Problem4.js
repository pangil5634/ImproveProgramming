function solution(answers) {
    // 1. 수포자들의 패턴 선언
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];

    // 2. 수포자 1, 2, 3의 점수를 저장할 배열 선언
    const scores = [0, 0, 0]; 

    // 3. 각 배열을 순회하면서 점수를 계산
    /*
        entries() 메서드는 배열 내 데이터를 '인덱스와 값'으로 묶어서 순회할 수 있는 Iterator 객체를 반환한다.
    */
    for (const [i, answer] of answers.entries()) { // 예 : [1, 2, 3, 4]가 answers라면 먼저, 1이 answer 변수에 저장
        for(const [j, pattern] of patterns.entries()) { // 예 : [[11, 12, 13, 14, 15], [21, 22, 23, 24, 25], [31, 32, 33, 34, 35]]가 patterns라면, 먼저, [11, 12, 13, 14, 15]가 pattern에 저장. 
            if (answer === pattern[i % pattern.length]) {
                scores[j]++;
            }
        }   
    }

    // 4. 가장 높은 점수를 가진 수포자의 점수를 찾기
    // max 메서드는 숫자 하나하나를 개별 인자로 받기에, 스프레드 연산자를 사용하여 배열을 하나씩 개별 인자로 할당한다.
    // 예 : scores = [3, 3, 2, 1]라면, maxScore는 3이 된다.
    const maxScore = Math.max(...scores);

    // 5. 가장 높은 점수를 받은 수포자들의 번호를 찾아서 배열에 저장.
    const highestScorers = [];

    // scores를 순회하며, maxScore과 같은 값을 가진, 즉 가장 높은 점수를 가진 수포자의 인덱스를 배열에 삽입한다. (단, 번째를 나타내기 위해 1을 더해 삽입)
    for (let i = 0; i < scores.length; i++){
        if (scores[i] === maxScore){
            // 6. 인덱스는 1부터 시작하므로 +1을 해줌
            highestScorers.push(i + 1);
        }
    }

    // 7. 가장 높은 점수를 가진 수포자들의 인덱스를 반환
    return highestScorers
}

// 예시 
console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1, 2, 3]