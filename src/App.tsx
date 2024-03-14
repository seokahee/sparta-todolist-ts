import { useState } from "react";
import AddTodos from "./components/AddTodos";
import TodoList from "./components/TodoList";
import { Todo } from "./components/Todos";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div>
      <AddTodos todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
