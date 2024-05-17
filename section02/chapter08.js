// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 배열의 모든 요소를 순회하면서 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});
let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});
console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
console.log(isInclude);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log(index);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item !== 2);
console.log(findedIndex);

// 4.1 findIndex가 필요한 이유
let obejctArr = [{ name: "사람1" }, { name: "사람2" }];
console.log(obejctArr.indexOf({ name: "사람1" })); // 얕은 비교로 못 찾음.
console.log(obejctArr.findIndex((item) => item.name === "사람2"));

// 5. find
// 모든 요소를 순회하면서 콜백 함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [{ name: "사람1" }, { name: "사람2" }];
const finded = arr5.find((item) => (item.name = "사람2"));
console.log(finded);
