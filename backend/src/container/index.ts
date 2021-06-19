import { container } from "tsyringe";

import BCryptHashProvider from "../providers/implementations/BcryptHashProvider"
import IHashProvider from "../providers/interface/IHashProvider";
import IMessagesRepository from "../repositories/interfaces/IMessagesRepository";
import ISugestionsRepository from "../repositories/interfaces/ISugestionsRepository";

import IUsersRepository from "../repositories/interfaces/IUsersRepository";
import MessagesRepository from "../repositories/MessagesRepository";
import SugestionsRepository from "../repositories/SugestionsRepository";
import UsersRepository from "../repositories/UsersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IHashProvider>(
  "HashProvider",
  BCryptHashProvider
);

container.registerSingleton<IMessagesRepository>(
  "MessagesRepository",
  MessagesRepository
);

container.registerSingleton<ISugestionsRepository>(
  "SugestionsRepository",
  SugestionsRepository
);
