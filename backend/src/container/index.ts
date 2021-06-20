import { container } from "tsyringe";

import BCryptHashProvider from "../providers/implementations/BcryptHashProvider"
import IHashProvider from "../providers/interface/IHashProvider";
import IMessagesRepository from "../repositories/interfaces/IMessagesRepository";
import ISuggestionsRepository from "../repositories/interfaces/ISuggestionsRepository";
import IUsersRepository from "../repositories/interfaces/IUsersRepository";
import IVotesRepository from "../repositories/interfaces/IVotesRepository";
import MessagesRepository from "../repositories/MessagesRepository";
import SuggestionsRepository from "../repositories/SuggestionsRepository";
import UsersRepository from "../repositories/UsersRepository";
import VotesRepository from "../repositories/VotesRepository";

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

container.registerSingleton<ISuggestionsRepository>(
  "SuggestionsRepository",
  SuggestionsRepository
);

container.registerSingleton<IVotesRepository>(
  "VotesRepository",
  VotesRepository
);
