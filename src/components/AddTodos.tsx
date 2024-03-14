import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todos";

const AddTodos = ({
  todos,
  setTodos,
}: {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
    if (!title) {
      alert("제목을 입력해 주세요");
      titleRef.current && titleRef.current.focus();
    } else if (!content) {
      alert("내용을 입력해 주세요");
      contentRef.current && contentRef.current.focus();
    }
    if (title && content) {
      const newTodo = {
        id: todoId,
        title,
        content,
        date: regDate,
        isDone: false,
      };
      setTodos([...todos, newTodo]);
      alert("새로운 일정이 등록 되었습니다.");
      titleRef.current && titleRef.current.focus();
      setTitle("");
      setContent("");
    }
  };
  return (
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
  );
};

export default AddTodos;
