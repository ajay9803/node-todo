import { Request, Response } from "express";

import * as UserService from "../services/user";

export const getUsers = (req: Request, res: Response) => {
  res.json({
    message: "Hello users",
  });
};

export const getUserById = (req: Request, res: Response) => {
  const { id } = req.params;

  const data = UserService.getUserById(id);

  res.json(data);
};

export const createUser = (req: Request, res: Response) => {
  const { body } = req;

  UserService.createUser(body);

  res.json({
    message: "User created",
  });
};
