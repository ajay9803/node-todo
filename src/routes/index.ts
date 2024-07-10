import express from "express";

import userRouter from "./user";
import todoRouter from "./todo";

const router = express();

router.use("/users", userRouter);
router.use("/todos", todoRouter);

export default router;
