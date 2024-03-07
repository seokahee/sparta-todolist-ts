export type TodoList = {
  id: string;
  title: string;
  content: string;
  date: string;
  isDone: boolean;
};
export interface props {
  item: TodoList;
  setTodos: React.Dispatch<React.SetStateAction<TodoList[]>>;
}
