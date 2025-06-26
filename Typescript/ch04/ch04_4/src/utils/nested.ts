const calc = (value: number, cb: (result: number) => void): void => {
    let add = (a: number, b: number) => a + b;
    function multiply(a: number, b: number) {
        return a * b;
    }
    let result = multiply(add(1, 2), value);
    cb(result);
}

calc(30, (result : number) => console.log(`result is ${result}`)); // result is 90