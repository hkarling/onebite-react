// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "허벗", // key : value
  nickname: "hkarling",
  age: 40,
  location: "서울",
  hobby: "로잉",
  extra: {},
  10: 20,
  "like cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name);

let age = person["age"];
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.2 새로운 프로퍼티 추가하는 방법
person.job = "무직";
person["Favorite Food"] = "피자";
console.log(person);

// 3.3 프로퍼티를 수정하는 바업ㅂ
person.job = "Developer";
person["Favorite Food"] = "치킨";
console.log(person);

// 3.4 프로퍼티 삭제하는 바업ㅂ
delete person.job;
delete person["Favorite Food"];
console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1, result2);
