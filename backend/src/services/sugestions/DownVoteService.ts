import { inject, injectable } from "tsyringe";
import ISugestionsRepository from "../../repositories/interfaces/ISugestionsRepository";

@injectable()
export default class FindAllSugestionsService {
    constructor(
        @inject("SugestionsRepository")
        private sugestionsRepository: ISugestionsRepository
    ) {}

    public async execute(id: string): Promise<void> {
        const sugestion = await this.sugestionsRepository.findById(id);

        if(!sugestion) {
            throw new Error("Essa sugestão não existe.");
        }

        sugestion.votes--;

        await this.sugestionsRepository.save(sugestion);
    }
}