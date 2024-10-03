/**
 * @param {string[]} tokens
 * @return {number}
 */

var calc = function (a, b, token) {
  if (token === "+") return a + b;
  if (token === "-") return a - b;
  if (token === "*") return a * b;
  if (token === "/") return Math.trunc(a / b);
};

var evalRPN = function (tokens) {
  // Time: O(n), loop tokens
  // Space: O(m), save nums of m
  // RPN (Reverse Polish Notation) => 21+ => 2 + 1 => 21+5* => (2 + 1) * 5

  const nums = [];
  const symbols = ["+", "-", "*", "/"];

  for (let token of tokens) {
    if (symbols.includes(token)) {
      const v1 = nums.pop();
      const v2 = nums.pop();
      const result = calc(v2, v1, token);
      nums.push(result);
    } else {
      nums.push(Number(token));
    }
  }

  return nums[0];
};
