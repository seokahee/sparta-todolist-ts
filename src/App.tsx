import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type TodoList = {
  id: string;
  title: string;
  content: string;
  date: string;
  isDone: boolean;
};

function App() {
  const [todos, setTodos] = useState<TodoList[]>([]);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const todoId: string = uuidv4();

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  const inputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setContent(e.target.value);
    }
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const today = new Date();
    const regDate = today.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
    if (title?.trim().length === 0) {
      titleRef.current && titleRef.current.focus();
    } else if (content?.trim().length === 0) {
      contentRef.current && contentRef.current.focus();
    }
    const newTodo = {
      id: todoId,
      title,
      content,
      date: regDate,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <div>
        <header>Typescript TodoList</header>
        <form onSubmit={onSubmitHandler}>
          <input
            ref={titleRef}
            value={title}
            name="title"
            onChange={inputChange}
            type="text"
            placeholder="제목을 입력해 주세요"
            autoFocus
          />
          <input
            ref={contentRef}
            value={content}
            name="content"
            onChange={inputChange}
            type="text"
            placeholder="내용을 입력해 주세요"
          />
          <button type="submit">등록</button>
        </form>
      </div>

      <div>
        {todos.map((item) => {
          return (
            <div key={item.id}>
              <div>{item.id}</div>
              <div>{item.title}</div>
              <div>{item.content}</div>
              {/* <button onClick={todoComplet}>완료</button> */}
              {/* <button onClick={todoRemove}>삭제</button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
