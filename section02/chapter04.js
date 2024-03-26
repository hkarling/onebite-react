// 1. Spread 연산자
// => Spread : 흩뿌리다, 펼치다라는 뜻
// => 객체나 배열에 저장된 여러 개의 값을 흩뿌리는 역할

let arr1 = [1, 2, 3];
// let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];
let arr2 = [4, ...arr1, 5, 6];
// console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  //   a: obj1.a,
  //   b: obj2.b,
  ...obj1,
  c: 3,
  d: 4,
};
// console.log(obj2);

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
funcA(...arr1);

// 2. Rest 매개변수
// => Rest는 나머지, 나머지 매개변수
function funcB(one, ...rest) {
  console.log(one, rest);
}

funcB(...arr1);
