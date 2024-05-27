import useInput from "./../hooks/useInput";

// 3가지 hook 간단한 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다
// 3. Custom Hook을 직접 만들 수 있다

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();
  return (
    <div>
      <div>
        <input value={input} onChange={onChange} />
        {input}
      </div>
      <div>
        <input value={input2} onChange={onChange2} />
        {input2}
      </div>
    </div>
  );
};

export default HookExam;
