import TodoItem from "../components/TodoItem";
import { Todo } from "./Todos";

const TodoList = ({
  todos,
  setTodos,
}: {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}) => {
  return (
    <div>
      <div>
        <h1>🔥Working</h1>
        {todos
          .filter((item) => !item.isDone)
          .map((item) => {
            console.log("item", item);
            return <TodoItem key={item.id} item={item} setTodos={setTodos} />;
          })}
      </div>
      <div>
        <h1>🌈Done!</h1>
        {todos
          .filter((item) => item.isDone)
          .map((item) => {
            console.log("item", item);
            return <TodoItem key={item.id} item={item} setTodos={setTodos} />;
          })}
      </div>
    </div>
  );
};

export default TodoList;
