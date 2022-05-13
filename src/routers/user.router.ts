import { Router } from "express";

const userRouter = Router();

import UsersController from "../controllers/users.controller";

userRouter.post("", UsersController.store);
userRouter.get("", UsersController.index);
userRouter.get("/:id", UsersController.show);
userRouter.patch("/:id", UsersController.update);

export default userRouter;
