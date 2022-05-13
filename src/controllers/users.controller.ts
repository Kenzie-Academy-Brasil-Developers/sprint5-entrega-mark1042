import { Request, Response } from "express";
import createUserService from "../services/user/createUser.service";
import listUsersService from "../services/user/listUsers.service";
export default class UsersController {
  static async store(req: Request, res: Response) {
    try {
      const { name, email, password, age } = req.body;

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

  static async show(req: Request, res: Response) {}

  static async update(req: Request, res: Response) {}

  static async delete(req: Request, res: Response) {}
}
