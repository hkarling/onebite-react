// 1. 함수 표현식
function funcA() {
  console.log("funcA");
}

let varA = funcA;
// console.log(varA);
varA();

let varB = function funcB() {
  console.log("funcB");
};
varB();
// funcB(); // 이름으로 부르면 오류난다

let varC = function () {
  console.log("funcC");
};

// 2. 화살표 함수
let varD = () => {
  return 1;
};
let varE = () => 1;
console.log(varE());

let varF = (value) => value + 1;
console.log(varF(10));
