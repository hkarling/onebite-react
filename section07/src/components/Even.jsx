import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // CleanUp, 정리함수 : 반환 함수는 컴포넌트 unmount 시에 호출된다
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수입니다</div>;
};

export default Even;
