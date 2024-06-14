// 이미지를 src 아래에 넣으면 vite가 제공하는 이미지 최적화를 사용할 수 있다
// -> 메모리에 올라가서 처리속도가 빨라진다
// -> 대량의 이미지를 사용할 경우 public 이하에서 파일로 불러오는게 나을 수 있다
import emotion1 from "../assets/emotion1.png";
import emotion2 from "../assets/emotion2.png";
import emotion3 from "../assets/emotion3.png";
import emotion4 from "../assets/emotion4.png";
import emotion5 from "../assets/emotion5.png";

export function getEmotionImage(emotionId) {
  switch (emotionId) {
    case 1:
      return emotion1;
    case 2:
      return emotion2;
    case 3:
      return emotion3;
    case 4:
      return emotion4;
    case 5:
      return emotion5;
    default:
      return null;
  }
}
