import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const deleteUserService = async (id: string) => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOne({ where: { id } });

  if (!user) {
    throw new Error("user not found");
  }

  await userRepo.delete(id);
  return user;
};

export default deleteUserService;
