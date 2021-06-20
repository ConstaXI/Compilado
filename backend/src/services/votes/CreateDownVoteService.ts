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

    public async execute(data: ICreateVoteDTO): Promise<Vote> {
        const user = await this.usersRepository.findByID(data.user_id);

        const suggestion = await this.suggestionsRepository.findById(data.suggestion_id);

        if(!user) {
            throw new Error("Usuário não encontrado.");
        }

        if(!suggestion) {
            throw new Error("Sugestão não encontrada.");
        }

        suggestion.votes--;

        const vote = await this.votesRepository.create(data);

        await this.suggestionsRepository.save(suggestion);

        return vote;
    }
}