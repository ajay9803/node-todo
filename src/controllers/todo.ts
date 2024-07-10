import * as TodoService from "../services/todo";
import { Request, Response } from "express";

export const createTodo = (req: Request, res: Response) => {
  const { id, title, description } = req.body;
  const newTodo = {
    id: id,
    title: title,
    description: description,
  };

  const result = TodoService.createTodo(newTodo);
  res.status(result.statusCode).send(result);
};

export const getAllTodos = (req: Request, res: Response) => {
  const result = TodoService.getAllTodos();

  res.status(result.statusCode).send(result);
};

export const getTodoById = (req: Request, res: Response) => {
  const { id } = req.params;
  const result = TodoService.getTodoById(id);

  res.status(result.statusCode).send(result);
};

export const deleteTodoById = (req: Request, res: Response) => {
  const { id } = req.params;
  const result = TodoService.deleteTodo(id);

  res.send(result);
};

export const updateTodo = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description } = req.body;
  console.log(id, title, description);
  

  const result = TodoService.updateTodo(id, title, description);

  res.status(result.statusCode).send(result);
};
