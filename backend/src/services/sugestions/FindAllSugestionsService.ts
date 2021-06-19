import { inject, injectable } from "tsyringe";
import Sugestion from "../../models/Sugestion";
import ISugestionsRepository from "../../repositories/interfaces/ISugestionsRepository";

@injectable()
export default class FindAllSugestionsService {
    constructor(
        @inject("SugestionsRepository")
        private sugestionsRepository: ISugestionsRepository
    ) {}

    public async execute(): Promise<Sugestion[] | undefined> {
        const sugestions = await this.sugestionsRepository.index();

        return sugestions;
    }
}