import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/user";
import bcrypt from "bcrypt";
const updateUserService = async ({
  id,
  name,
  email,
  password,
  age,
}: IUserUpdate) => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOne({ where: { id } });

  if (!user) {
    throw new Error("user not found");
  }

  name ? (user.name = name) : user.name;
  email ? (user.email = email) : user.email;
  password ? (user.password = bcrypt.hashSync(password, 10)) : user.password;
  age ? (user.age = age) : user.age;

  await userRepo.save(user);
  return user;
};

export default updateUserService;
