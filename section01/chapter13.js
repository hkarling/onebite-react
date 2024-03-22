function main(value) {
  value();
}

function sub() {
  console.log("sub");
}

// main(sub); // 콜백 함수 sub

// 1. 콜백 함수
function main(value) {
  //   console.log(value);
  console.log(1);
  console.log(2);
  value();
}

function sub() {
  console.log("i am sub");
}
main(sub);

main(() => {
  console.log("i am sub");
});

// 2. 콜백 함수의 활용
function repeat(count) {
  for (let idx = 0; idx <= count; idx++) {
    console.log(idx);
  }
}
function repeat(count) {
  for (let idx = 0; idx <= count; idx++) {
    console.log(idx * 2);
  }
}
function repeat(count) {
  for (let idx = 0; idx <= count; idx++) {
    console.log(idx * 3);
  }
}

function repeat2(count, callback) {
  for (let idx = 0; idx <= count; idx++) {
    callback(idx);
  }
}

repeat2(5, function (idx) {
  console.log(idx * 3);
});

repeat2(5, (idx) => console.log(idx * 3));
