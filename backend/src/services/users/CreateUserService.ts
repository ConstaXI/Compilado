import { inject, injectable } from "tsyringe";
import ICreateUserDTO from "../../dtos/ICreateUserDTO";
import User from "../../models/User";
import IUsersRepository from "../../repositories/interfaces/IUsersRepository";
import bcrypt from "bcrypt";
import IHashProvider from "../../providers/interface/IHashProvider";

@injectable()
export default class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) {}

  public async execute(data: ICreateUserDTO): Promise<User> {
    const verifyEmail = await this.usersRepository.findByEmail(data.email);

    if (verifyEmail) {
      throw new Error("This email is already being used");
    }

    const hashedPassword = await this.hashProvider.generateHash(data.password);

    const user = await this.usersRepository.create({
      ...data,
      password: hashedPassword
    });

    return user;
  }
}
