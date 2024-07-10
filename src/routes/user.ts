import express from "express";
import {createUser, getUserById, getUsers} from "../controllers/user";

const router = express();

router.get("/", getUsers);

router.get("/:id", getUserById);

router.post("/", createUser);

router.put("/:id", (req, res) => {
  res.json({
    message: "User updated",
  });
});

router.delete("/:id", (req, res) => {
  res.json({
    message: "User deleted",
  });
});

export default router;