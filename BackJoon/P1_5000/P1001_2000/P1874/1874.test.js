const fs = require("fs");
const path = require("path");

// 1874.js의 로직을 함수로 래핑
function stackSequence(inputLines) {
    const N = Number(inputLines[0]);
    const sequence = inputLines.slice(1).map(Number);

    let stack = [];
    let result = [];
    let current = 1;
    let possible = true;

    for (let i = 0; i < N; i++) {
        let num = sequence[i];
        while (current <= num) {
            stack.push(current++);
            result.push("+");
        }
        if (stack[stack.length - 1] === num) {
            stack.pop();
            result.push("-");
        } else {
            possible = false;
            break;
        }
    }

    return possible ? result.join("\n") : "NO";
}

// 테스트 코드
describe("1874 스택 수열", () => {
    test("예제 입력 1", () => {
        const input = [
            "8",
            "4",
            "3",
            "6",
            "8",
            "7",
            "5",
            "2",
            "1"
        ];
        const expected =
            "+\n+\n+\n+\n-\n-\n+\n+\n-\n+\n+\n-\n-\n-\n-\n-";
        expect(stackSequence(input)).toBe(expected);
    });

    test("예제 입력 2 (불가능한 경우)", () => {
        const input = [
            "5",
            "1",
            "2",
            "5",
            "3",
            "4"
        ];
        expect(stackSequence(input)).toBe("NO");
    });

    test("오름차순 입력", () => {
        const input = [
            "5",
            "1",
            "2",
            "3",
            "4",
            "5"
        ];
        const expected =
            "+\n-\n+\n-\n+\n-\n+\n-\n+\n-";
        expect(stackSequence(input)).toBe(expected);
    });

    test("내림차순 입력", () => {
        const input = [
            "5",
            "5",
            "4",
            "3",
            "2",
            "1"
        ];
        const expected =
            "+\n+\n+\n+\n+\n-\n-\n-\n-\n-";
        expect(stackSequence(input)).toBe(expected);
    });

    test("중간에 불가능한 경우", () => {
        const input = [
            "4",
            "2",
            "1",
            "4",
            "3"
        ];
        const expected =
            "+\n+\n-\n-\n+\n+\n-\n-";
        expect(stackSequence(input)).toBe(expected);
    });
});