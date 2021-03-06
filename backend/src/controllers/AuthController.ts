import { Request, Response } from 'express';
import { container } from 'tsyringe';
import AuthenticateUserService from '../services/users/AuthenticateUserService';

export default class AuthController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUser = container.resolve(AuthenticateUserService);

    const { token, user } = await authenticateUser.execute({
      email,
      password,
    });

    return response.json({ user, token });
  }
}
