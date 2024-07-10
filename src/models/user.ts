import { User } from "../interfaces/user";

const users = [
  {
    id: "1",
    name: "user 1",
  },
  {
    id: "2",
    name: "user 2",
  },
];

export const getUserById = (id: string) => {
  return users.find((user) => user.id === id);
};

export const createUser = (user: User) => {
  users.push({
    id: `${users.length + 1}`,
    name: user.name,
  });
};
