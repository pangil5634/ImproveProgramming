// pop() 메서드로 마지막 데이터 삭제
const arr = [1, 2, 3, 4, 5];
const poppedElement = arr.pop(); // 마지막 요소를 제거하고 그 값을 반환
console.log(poppedElement); // 5
console.log(arr); // [1, 2, 3, 4]
console.log("");

// shift() 메서드로 첫 번째 데이터 삭제
const arr2 = [1, 2, 3, 4, 5];
const shiftedElement = arr2.shift(); // 첫 번째 요소를 제거하고 그 값을 반환
console.log(shiftedElement); // 1
console.log(arr2); // [2, 3, 4, 5]
console.log("");

// splice() 메서드로 중간 데이터 삭제
const arr3 = [1, 2, 3, 4, 5];
const removedElements = arr3.splice(2, 2); // 인덱스 2부터 2개의 요소를 제거
console.log(removedElements); // [3, 4]
console.log(arr3); // [1, 2, 5]
console.log("");