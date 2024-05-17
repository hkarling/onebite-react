// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
  { name: "사람1", hobby: "테니스" },
  { name: "사람2", hobby: "테니스" },
  { name: "사람3", hobby: "독서" },
];
const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) => {
  return item * 2;
});
console.log(mapResult);
let names = arr1.map((item) => item.name);
console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "c", "a"];
arr3.sort();
console.log(arr3);
let arr4 = [10, 3, 5];
arr4.sort((a, b) => {
  if (a > b) {
    return 1; // b가 a앞에 와라
  } else if (a < b) {
    return -1; // a가 b 앞에 와라
  } else {
    return 0; // 두 값의 자리를 바꾸지 마라
  }
});
console.log(arr4);

// https://reactjs.winterlood.com/fc0a951e-41cd-4cc5-8f47-7507965bbe41#8f2d70d5e8334377bb56f0a3f9101de2%EF%BB%BF

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "fine"];
const joined = arr6.join(" ");
console.log(joined);
