// 배열과 차원

// 2차원 배열을 리터럴로 표현
const arr2D = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
// arr2D[2][3]에 저장된 값을 표현
console.log(arr2D[2][3]); // 12
// arr2D[2[3]에 저장된 값을 15로 변경
arr2D[2][3] = 15;
// 변경된 값을 출력
console.log(arr2D[2][3]); // 15

// 크기가 3 * 4인 배열을 선언하는 예
const arr2D_2 = [... new Array(3)].map((_, i) => new Array(4).fill(i));
/*
1. new Array(3)
	•	길이가 3인 배열을 생성합니다.
	•	하지만 이 배열은 비어있고, 아직 map 등을 사용할 수 없음 (빈 슬롯만 있음).

2. [...new Array(3)]
	•	스프레드 연산자 ...를 사용해서, undefined 값이 들어간 배열로 변환합니다.
	•	결과는: [undefined, undefined, undefined]
	•	이때부터 .map() 등의 메서드를 사용할 수 있게 됩니다.

3. .map((_, i) => new Array(4).fill(i))
	•	map을 사용해서, 각 요소를 새로운 배열로 바꿔줍니다.
	•	i는 인덱스입니다.
	•	new Array(4).fill(i)는 길이가 4인 배열을 생성하고, 모두 i로 채웁니다.

*/
console.log(arr2D_2);