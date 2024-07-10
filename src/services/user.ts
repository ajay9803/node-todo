import { User } from "../interfaces/user";
import * as UserModel from "../models/user";

export const getUserById = (id: string) => {
  const data = UserModel.getUserById(id);

  if (!data) {
    return {
      error: `User with id ${id} not found.`,
    };
  }

  return data;
};

export const createUser = (user: User) => {
  UserModel.createUser(user);
};
