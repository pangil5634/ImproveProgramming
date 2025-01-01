// [전역 변수] 최대 나이
let MAX_AGE = 100

// [함수] 랜덤 나이를 반환해주는 함수
export function makeRandomNumber(max: number = MAX_AGE): number {
    // Math.random()을 사용하여 0(포함)부터 1(제외) 사이의 랜덤 실수를 생성
    // Math.ceil()을 사용하여 소수점을 올림 처리
    return Math.ceil((Math.random() * max));
}
