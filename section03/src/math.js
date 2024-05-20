// math module

// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// 1. CommonJS Module
// module.exports = {
//   add,
//   sub,
// };

// 2. ES module
// export { add, sub };

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}
