const readline = require('readline');

const rl = readline.createInterface({

    input : process.stdin,
    output : process.stdout
})

rl.question('', (answer) => {
    // 입력받은 값을 숫자로 변환
    const number = parseInt(answer, 10);

    let result = 1;
    if (number === 0)
        result = 1;
    else {
        for (let i = 1; i <= number; i++)
            result *= i;
    }
    
    console.log(result);
    // 입력 인터페이스 닫기
    rl.close();
})

