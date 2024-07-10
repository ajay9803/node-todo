import { Todo } from "../interfaces/todo";

export const todos: Todo[] = [
  {
    id: "1",
    title: "Todo 1",
    description: "This is todo 1",
  },
  {
    id: "2",
    title: "Todo 2",
    description: "This is todo 2",
  },
];

export const createTodo = (todo: Todo) => {
  todos.push(todo);
};

export const deleteTodo = (todoId: string) => {
  const index = todos.findIndex((todo) => todo.id === todoId);
  if (index >= 0) {
    todos.splice(index, 1);
  }
};

export const udpateTodo = (id: string, title: string, description: string) => {
  const todo = todos.find((todo) => todo.id === id);

  if (todo) {
    todo.title = title;
    todo.description = description;
    return todo;
  }
};

export const getAllTodos = () => {
  return todos;
};

export const getTodoById = (todoId: string) => {
  const todo = todos.find((todo) => {
    return todo.id === todoId;
  });
  return todo;
};
