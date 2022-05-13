import { Router } from "express";

const userRouter = Router();

import UsersController from "../controllers/users.controller";

userRouter.post("", UsersController.store);

export default userRouter;
