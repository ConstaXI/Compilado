import { sign } from "jsonwebtoken";
import { injectable, inject } from "tsyringe";
import User from "../../models/User";
import IHashProvider from "../../providers/interface/IHashProvider";
import IUsersRepository from "../../repositories/interfaces/IUsersRepository";
import authConfig from "../../config/auth";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

@injectable()
export default class AuthenticateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,

    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}

  public async execute(data: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(data.email);

    if (!user) {
      throw new Error("Usuário com este email não foi encontrado");
    }

    const passwordMatched = await this.hashProvider.compare(
      data.password,
      user.password
    );

    if (!passwordMatched) {
      throw new Error("Senha inválida");
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return { user, token };
  }
}
