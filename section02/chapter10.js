// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자로 생성. 현시각
console.log(date1);
let date2 = new Date(1997, 1, 7, 10, 10, 10); // "1997-01-07", "1997. 01. 07", "1997/01/07", "1997-01-07/10:10:10"
console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫작ㅄ
let ts1 = date1.getTime();
console.log(ts1);
let date4 = new Date(ts1);
console.log(date4);
