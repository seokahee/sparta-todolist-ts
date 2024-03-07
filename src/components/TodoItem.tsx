import { props } from "./Todos";

const TodoItem = ({ item, setTodos }: props) => {
  const todoRemove = () => {
    setTodos((prev) => {
      if (window.confirm("일정을 삭제하시겠습니까?")) {
        return prev.filter((todo) => todo.id != item.id);
      } else {
        return prev;
      }
    });
  };

  const todoCompleted = () => {
    if (window.confirm("일정을 '완료' 처리하시겠습니까?")) {
      setTodos((prev) => {
        return prev.map((todo) => {
          return todo.id === item.id ? { ...todo, isDone: !todo.isDone } : todo;
        });
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <div> {item.title}</div>
      <div>{item.content}</div>
      <div>{item.date}</div>

      <button onClick={todoCompleted}>완료</button>
      <button onClick={todoRemove}>삭제</button>
    </div>
  );
};

export default TodoItem;
