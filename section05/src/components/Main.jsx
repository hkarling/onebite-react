import "./Main.css";

// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
// 2. 숫자, 문자열, 배열의 값만 렌더링 된다
// 3. 모든 태그는 닫혀있어야 한다 (self closing 가능)
// 4. 최상위 태그는 반드시 하나여야 한다 (빈 태그 사용 가능 - 렌더링 시 무시)
const Main = () => {
  const user = {
    name: "herber",
    isLogin: true,
  };
  // return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
  if (user.isLogin) {
    return (
      <div
        className="logout"
        // style={{
        //   backgroundColor: "red",
        //   borderBottom: "5px solid blue",
        // }}
      >
        로그아웃
      </div>
    );
  } else {
    return <div>로그인</div>;
  }
};

export default Main;
