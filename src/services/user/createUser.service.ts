import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserCreate } from "../../interfaces/user";
import bcrypt from "bcrypt";

const createUserService = async ({
  name,
  email,
  password,
  age,
}: IUserCreate) => {
  const userRepo = AppDataSource.getRepository(User);
  const emailAlreadyExists = await userRepo.findOne({
    where: {
      email: email,
    },
  });
  if (emailAlreadyExists) {
    throw new Error("e-mail already in use");
  }

  const user = new User();
  user.name = name;
  user.email = email;
  user.password = bcrypt.hashSync(password, 10);
  user.age = age;

  userRepo.create(user);
  await userRepo.save(user);
  return user;
};

export default createUserService;
