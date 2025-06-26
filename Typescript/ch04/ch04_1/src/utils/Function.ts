// Typescript에서의 함수 선언
function add(a: number, b: number): number {
    return a + b;
}



// void 타입
function printMe(name: string, age: number): void {
    console.log(`name : ${name}, age : ${age}`);
}



// 함수 시그니처 사용하기
// let printMe2: (string, number) => void = function (name: string, age: number): void { }
let printMe2: (name: string, age: number) => void = function (name: string, age: number): void { }



// type 키워드로 별칭 만들기
type stringNumberFunc = (name: string, age: number) => void;

let f: stringNumberFunc = function (a: string, b: number): void { }
let g: stringNumberFunc = function (c: string, d: number): void { }



// undefined 주의사항

interface INameable {
    name?: string;
}

function getName(o: INameable) {
    // return o.name
    // return o != undefined ? o.name : "unknown name";
    return 0 != undefined && o.name ? add.name : "undefined";
}

// let n = getName(undefined);
console.log(getName({name : undefined}));

