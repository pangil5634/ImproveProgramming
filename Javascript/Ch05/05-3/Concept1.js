// push() 메서드로 데이터 추가

const arr = [1, 2, 3];
arr.push(4); // 배열의 끝에 4를 추가
console.log(arr); // [1, 2, 3, 4]  

// concat() 메서드로 데이터 추가
let arr2 = [1, 2, 3];
arr2 = arr2.concat([4, 5]); // 배열의 끝에 4를 추가
console.log(arr2); // [1, 2, 3, 4, 5]

// 스프레드 연산자로 데이터 추가
let arr3 = [1, 2, 3];
arr3 = [...arr3, ...[4, 5]]; // 배열의 끝에 4를 추가
arr3 = [...arr3, 6, 7, 8]; // 배열의 끝에 6, 7, 8을 추가
console.log(arr3); // [1, 2, 3, 4, 5, 6, 7, 8]

// unshift() 메서드로 데이터 추가
let arr4 = [1, 2, 3];
arr4.unshift(0); // 배열의 앞에 0을 추가
console.log(arr4); // [0, 1, 2, 3]

// splice() 메서드로 데이터 추가
const arr5 = [1, 2, 3, 4, 5];
arr5.splice(2, 0, 9999); // 인덱스 2에 9999를 추가 (삭제하지 않음)
console.log(arr5); // [1, 2, 9999, 3, 4, 5]