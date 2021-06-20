import { inject, injectable } from "tsyringe";
import Suggestion from "../../models/Suggestion";
import ISuggestionsRepository from "../../repositories/interfaces/ISuggestionsRepository";

@injectable()
export default class FindAllSuggestionsService {
    constructor(
        @inject("SuggestionsRepository")
        private suggestionsRepository: ISuggestionsRepository
    ) {}

    public async execute(): Promise<Suggestion[] | undefined> {
        const suggestions = await this.suggestionsRepository.index();

        return suggestions;
    }
}