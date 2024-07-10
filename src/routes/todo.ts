import express from "express";
import {
  createTodo,
  deleteTodoById,
  getAllTodos,
  getTodoById,
  updateTodo,
} from "../controllers/todo";

const router = express();

router.get("/", getAllTodos);
router.get("/:id", getTodoById);
router.post("/create-todo", createTodo);
router.delete("/delete-todo/:id", deleteTodoById);
router.patch("/update-todo/:id", updateTodo);

export default router;
