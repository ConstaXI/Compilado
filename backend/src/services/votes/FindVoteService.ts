import { inject, injectable } from "tsyringe";
import ICreateVoteDTO from "../../dtos/ICreateVoteDTO";
import Vote from "../../models/Vote";
import ISuggestionsRepository from "../../repositories/interfaces/ISuggestionsRepository";
import IUsersRepository from "../../repositories/interfaces/IUsersRepository";
import IVotesRepository from "../../repositories/interfaces/IVotesRepository";

@injectable()
export default class CreateVoteService {
    constructor(
        @inject("VotesRepository")
        private votesRepository: IVotesRepository,

        @inject("UsersRepository")
        private usersRepository: IUsersRepository,

        @inject("SuggestionsRepository")
        private suggestionsRepository: ISuggestionsRepository
    ) {}

    public async execute(user_id: string, suggestion_id: string): Promise<boolean> {
        const user = await this.usersRepository.findByID(user_id);

        const suggestion = await this.suggestionsRepository.findById(suggestion_id);

        if (!user) {
            throw new Error("Usuário não existe");
        }

        if (!suggestion) {
            throw new Error("Sugestão não existe");
        }

        const vote = await this.votesRepository.findByUserID(user_id, suggestion_id);

        if (vote) {
            return true;
        }

        return false;
    }
}