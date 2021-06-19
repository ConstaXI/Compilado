import { inject, injectable } from "tsyringe";
import ICreateSugestionDTO from "../../dtos/ICreateSugestionDTO";
import Sugestion from "../../models/Sugestion";
import ISugestionsRepository from "../../repositories/interfaces/ISugestionsRepository";
import IUsersRepository from "../../repositories/interfaces/IUsersRepository";

@injectable()
export default class CreateSugestionService {
    constructor(
        @inject("SugestionsRepository")
        private sugestionsRepository: ISugestionsRepository,

        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    public async execute(data: ICreateSugestionDTO): Promise<Sugestion> {
        const user = await this.usersRepository.findByID(data.user_id);

        if(!user) {
            throw new Error("Usário não encontrado");
        }

        const sugestion = await this.sugestionsRepository.create(data);

        sugestion.user_name = user.name + " " + user.surname;

        return sugestion;
    }
}