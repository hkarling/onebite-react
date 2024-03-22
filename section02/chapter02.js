// 단락 평가
// -> 앞 부분 만으로도 결과가 성립이 되면 뒷부분이 작동하지 않는다
function returnFalse() {
  console.log("function false");
  return undefined;
}

function returnTrue() {
  console.log("function true");
  return true;
}

console.log(returnFalse() && returnTrue()); // 단락평가 O
console.log(returnTrue() && returnFalse()); // 단락평가 X
console.log(returnTrue() || returnFalse()); // 단락평가 O
console.log(returnFalse() || returnTrue()); // 단락평가 X

// 단락 평가 활용 사례
function printName(person) {
  //   if (!person) {
  //     console.log("person의 값이 없음");
  //     return;
  //   }
  //   console.log(person.name);
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "허벗" });
