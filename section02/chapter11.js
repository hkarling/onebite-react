console.log(1);
setTimeout(() => {
  console.log(2);
}, 3000);
console.log(3);

// 자바스크립트 엔진은 싱글 쓰레드 -> Web APIs를 통해서 멀티 쓰레드를 처리한다.
