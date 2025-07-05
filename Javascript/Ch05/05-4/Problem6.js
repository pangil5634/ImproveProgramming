function solution(N, stages) {
    // 1단계 : 스테이지별 도전자 수를 구함.
    const challenger = new Array(N + 2).fill(0);
    for (const stage of stages) {
        challenger[stage] +=1;
    }

    // 2단계 : 스테이지별 실패한 사용자 수 계산.
    const fails = {};
    let total = stages.length;

    // 3단계 : 각 스테이지를 순회하며, 실패율 계산.
    for (let i = 1; i <= N; i++){
        if (challenger[i] === 0) {
            // 4단계 : 도전한 사람이 없는 경우, 실패율은 0
            fails[i] = 0;
            continue;
        }

        // 5단계 : 실패율 계산
        fails[i] = challenger[i] / total;
    
        // 6단계 : 다음 스테이지 실패율을 구하기 위해 현재 스테이지의 인원을 뺌.
        total -= challenger[i];
    }


    // 7단계 : 실패율이 높은 스테이지부터 내림차순으로 정렬.
    const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);

    // 8단계 : 스테이지 번호만 반환.
    return result.map((v) => Number(v[0]));
}

// 예시
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3, 4, 2, 1, 5]
console.log(solution(4, [4, 4, 4, 4, 4])); // [4, 1, 2, 3]