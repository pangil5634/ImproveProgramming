function solution(answers) {
    // 1. 수포자들의 패턴 
    const pattenrs = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];

    // 2. 수포자 1, 2, 3의 점수를 저장할 배열
    const scores = [0, 0, 0]; 

    // 3. 각 배열을 순회하면서 점수를 계산
    // for (let i = 0; i < answers.length; i++){
    //     for (let j = 0; j < pattenrs.length; j++){
    //         if (answers[i] === pattenrs[j][i % pattenrs[j].length]){
    //             scores[j]++;
    //         }
    //     }
    // }

    for (const [i, answer] of answers.entries()) {
        for(const [j, pattern] of pattenrs.entries()) {
            if (answer === pattern[i % pattern.length]) {
                scores[j]++;
            }
        }   
    }

    // 4. 가장 높은 점수를 가진 수포자의 점수를 찾고, 해당 수포자의 인덱스를 반환
    const maxScore = Math.max(...scores);

    // 5. 가장 높은 점수를 가진 수포자의 인덱스를 찾기
    const highestScorers = [];

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