// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str;
// console.log(result);

// 2. 명시적 형 변환
// -> 프로그래머가 내장 함수 등을 이용하여 직접 형 변환을 명시

let str1 = "10";
let srtToNum1 = Number(str1);
console.log(10 + srtToNum1);

let str2 = "10개";
// let strToNum2 = Number(str2);
let strToNum2 = parseInt(str2);
console.log(strToNum2);

// -> 숫자 to 문자행
let num1 = 201;
let numToStr1 = String(num1);
console.log(num1 + "입니다");
