import { container } from 'tsyringe';
import IHashProvider from './interface/IHashProvider';
import BCryptHashProvider from "./implementations/BcryptHashProvider"

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
