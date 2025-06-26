export type NumberToNumberFunc = (number: number) => number;

export const add = (a: number): NumberToNumberFunc => {
    const _add: NumberToNumberFunc = (b: number): number => {
        return a + b;
    };
    return _add;
};

const add2 = add(2);
console.log(add2(10)); // 12
