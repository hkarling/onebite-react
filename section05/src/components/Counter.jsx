import { useState } from "react";

// counter 버튼 클릭시 burb도 rereder 되는 상황을 방지
const Counter = () => {
  const [count, setCount] = useState(0); // [인수의 초기값, 상태변화 함수]
  console.log(count);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
