import { inject, injectable } from "tsyringe";
import ICreateSuggestionDTO from "../../dtos/ICreateSuggestionDTO";
import Suggestion from "../../models/Suggestion";
import ISuggestionsRepository from "../../repositories/interfaces/ISuggestionsRepository";
import IUsersRepository from "../../repositories/interfaces/IUsersRepository";

@injectable()
export default class CreateSuggestionService {
    constructor(
        @inject("SuggestionsRepository")
        private suggestionsRepository: ISuggestionsRepository,

        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    public async execute(data: ICreateSuggestionDTO): Promise<Suggestion> {
        const user = await this.usersRepository.findByID(data.user_id);

        if(!user) {
            throw new Error("Usário não encontrado");
        }

        data.user_name = user.name + " " + user.surname;

        const suggestion = await this.suggestionsRepository.create(data);

        return suggestion;
    }
}