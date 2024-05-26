import "./App.css";
import { useState } from "react";

// Root Component
function App() {
  const [count, setCount] = useState(0); // [인수의 초기값, 상태변화 함수]
  const [light, setLight] = useState("OFF");
  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
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
    </>
  );
}

export default App;
