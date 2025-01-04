// 클래스 선언
export class Person1{
    name: string = '';
    age?:number
}

export class Person2{
    constructor(public name: string, public age? : number) { }
}

export class Person3 {
    name: string;
    age?: number
    constructor(name: string, age?: number) {
        this.name = name;
        this.age = age;
    }
}

// 인터페이스로 클래스 선언
interface IPerson4{
    name: string;
    age?: number;
}

export class Person4 implements IPerson4{
    constructor(public name: string, public age? : number) { }
}