// 익명 인터페이스
export let ai: {
    name: string;
    age: number;
    etc?: boolean;
} = {name : 'Jack', age : 37}

/* 
    함수에서 사용된 익명 인터페이스 
    : me의 타입을 정의하기 위해 익명 인터페이스가 사용되었다.
*/
export function printMe(me: { name: string, age: number, etc?: boolean }) {
    console.log("ai : ", 
        me.etc 
            ? `${me.name} ${me.age} ${me.etc}` 
            : `${me.name} ${me.age}` 
    );
}
