import { container } from "tsyringe";

import BCryptHashProvider from "../providers/implementations/BcryptHashProvider"
import IHashProvider from "../providers/interface/IHashProvider";

import IUsersRepository from "../repositories/interfaces/IUsersRepository";
import UsersRepository from "../repositories/UsersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IHashProvider>("HashProvider", BCryptHashProvider);
