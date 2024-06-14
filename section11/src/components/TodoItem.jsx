import "./TodoItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onChangeChecked = () => onUpdate(id);
  const onClickDelete = () => onDelete(id);
  return (
    <div className="TodoItem">
      <input onChange={onChangeChecked} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
};

export default memo(TodoItem);
// 그냥은 의도했던 대로 동작하지 않는다
//  -> App에서의 function들이 다시 생성되기 때문
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 반환 값에 따라, props가 바뀌었는지 안바뀌었는지 판단
//   // T -> props 바뀌지 않음 -> 리렌더링 X
//   // F -> props 바뀜 -> 리렌더링 O
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;
//   return true;
// });
