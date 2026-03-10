function solution(numbers, queries) {
  const prefix = [0];
  for (let i = 0; i < numbers.length; i++) {
    prefix[i + 1] = prefix[i] + numbers[i];
  }

  return queries.map(([i, j]) => {
    return prefix[j] - prefix[i - 1];
  });
}

function main() {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  const { N, M } = input[0].split(" ").map(Number);
  const numbers = input[1].split(" ").map(Number);

  const queries = input.slice(2, 2 + M);

  const output = solution(numbers, queries);
  console.log(output.join("\n"));
}

if (require.main === module) {
  main();
}

module.exports = {
  solution,
};
