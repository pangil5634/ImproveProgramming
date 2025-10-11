function generateDescending(n) {
  const result = [];
  for (let i = n; i >= 1; i--) {
    result.push(String(i));
  }
  return result;
}

function main() {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  const N = Number(input[0]);
  const output = generateDescending(N).join("\n");
  console.log(output);
}

if (require.main === module) {
  main();
}

module.exports = {
  generateDescending,
};
