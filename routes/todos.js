import express from "express";
import {
  createTodo,
  readTodo,
  updateTodo,
  deleteTodo,
} from "../controller/todos.js";

const router = express.Router();
router.get("/", readTodo);
router.post("/", createTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
