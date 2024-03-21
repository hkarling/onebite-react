// 함수 선언
// function greeting(params) {
//   console.log("안녕하시오");
// }
// console.log("호출전");
// greeting();
// console.log("호출후");

// function getArea(width, height) {
//   //   let width = 10;
//   //   let height = 20;
//   let area = width * height;
//   console.log(area);
// }
// getArea(10, 20);

console.log(getArea(10, 40));

// 호이스팅
// -> 끌어올리다 라는 뜻
function getArea(width, height) {
  function another() {
    console.log("another");
  }
  another();
  let area = width * height;
  return area;
}
