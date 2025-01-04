// 추상 클래스 선언
abstract class AbstractPerson5 {
    // 추상 속성 name: 서브 클래스에서 반드시 구현해야 하는 속성
    abstract name: string; 
    
    // 생성자: age 속성을 초기화할 수 있는 생성자
    constructor(public age?: number) { }
}

// AbstractPerson5를 상속하는 Person5 클래스
export class Person5 extends AbstractPerson5 {
    // 생성자: name 속성을 초기화하고, 부모 클래스의 생성자를 호출
    constructor(public name: string, age?: number) {
        super(age); // 부모 클래스의 생성자 호출
    }
}
