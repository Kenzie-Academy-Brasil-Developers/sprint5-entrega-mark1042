import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const listUsersService = async () => {
  const userRepo = AppDataSource.getRepository(User);
  const users = userRepo.find();
  return users;
};

export default listUsersService;
