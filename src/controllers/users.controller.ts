import { Request, Response } from "express";
import createUserService from "../services/user/createUser.service";
import listUsersService from "../services/user/listUsers.service";
import getUserByIdService from "../services/user/getUserById.service";
import updateUserService from "../services/user/updateUser.service";
import deleteUserService from "../services/user/deleteUser.service";
export default class UsersController {
  static async store(req: Request, res: Response) {
    const { name, email, password, age } = req.body;
    try {
      const newUser = await createUserService({ name, email, password, age });
      return res.status(201).json({ message: "user created", user: newUser });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ error: err.name, message: err.message });
      }
    }
  }

  static async index(req: Request, res: Response) {
    try {
      const users = await listUsersService();
      return res.status(200).json({ users });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ error: err.name, message: err.message });
      }
    }
  }

  static async show(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await getUserByIdService(id);
      return res.status(200).json({ user });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ error: err.name, message: err.message });
      }
    }
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, password, age } = req.body;
    try {
      const updatedUser = await updateUserService({
        id,
        name,
        email,
        password,
        age,
      });
      return res.status(200).json({ message: "user updated", updatedUser });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ error: err.name, message: err.message });
      }
    }
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deletedUser = await deleteUserService(id);
      return res.status(200).json({ message: "user deleted", deletedUser });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ error: err.name, message: err.message });
      }
    }
  }
}
