function solution(numbers) {

    // 1. 빈 배열 생성
    let temp = [];

    // 2. 두 수를 선택하는 모든 경우의 수 구하기
    for (let i = 0; i < numbers.length; i++){
        for (let j = 0; j < i; j++){

            // 3. 두 수를 더한 결과를 새로운 배열에 추가
            temp.push(numbers[i] + numbers[j]);
        }
    }

    // 4. 중복된 값을 제거하고, 오름차순으로 정렬한 후 반환
    // const uniqueTemp = [...new Set(temp)];
    // uniqueTemp.sort((a, b) => a - b);
    // return uniqueTemp;

    return [... new Set(temp)].sort((a, b) => a - b);
}

// 예시
console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
