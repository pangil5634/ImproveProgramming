function solution(numbers) {

    let temp = [];
    for (let i = 0; i < numbers.length; i++){
        for (let j = 0; j < i; j++){
            temp.push(numbers[i] + numbers[j]);
        }
    }

    const uniqueTemp = [...new Set(temp)];
    uniqueTemp.sort((a, b) => a - b);
    return uniqueTemp;
}

// 예시
console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
