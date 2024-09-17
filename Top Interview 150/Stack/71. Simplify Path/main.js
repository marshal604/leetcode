/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  // Time: O(n), loop n segments
  // Space: O(n), save n segments
  let stack = [];
  const segments = path.split("/");

  segments.forEach((segment) => {
    // empty string is from split('/')
    if (segment === "" || segment === ".") return;
    if (segment === "..") return stack.pop();
    stack.push(segment);
  });

  return `/${stack.join("/")}`;
};
