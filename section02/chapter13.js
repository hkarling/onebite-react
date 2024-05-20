const promise = new Promise((resolve, reject) => {
  // 비동기 작업
  // executor
  setTimeout(() => {
    // console.log("안녕");
    // resolve("안녕"); // 성공
    // reject("왜 실패했는지 이유를 넣을 수 있지...");

    // const num = 10;
    const num = 10;

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num은 숫자가 아닙니다.");
    }
  }, 2000);
});
// console.log(promise);
// setTimeout(() => {
//   console.log(promise);
// }, 3000);

// then 메서드 (promise chaining)
// => 그 후에
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

function add10(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num은 숫자가 아닙니다.");
      }
    }, 2000);
  });
}

add10(0)
  .then((result) => {
    console.log(result);
    //   const newP = add10(result);
    //   newP.then((result) => {
    //     console.log(result);
    //   });
    //   return newP;
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(null);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
