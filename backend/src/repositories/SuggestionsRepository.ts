import { getRepository, Repository } from "typeorm";
import ICreateSuggestionDTO from "../dtos/ICreateSuggestionDTO";
import Suggestion from "../models/Suggestion";
import ISuggestionsRepository from "./interfaces/ISuggestionsRepository";

export default class SuggestionsRepository implements ISuggestionsRepository {
  private ormRepository: Repository<Suggestion>;

  constructor() {
    this.ormRepository = getRepository(Suggestion);
  }

  public async create(data: ICreateSuggestionDTO): Promise<Suggestion> {
    const suggestion = this.ormRepository.create(data);

    suggestion.votes = 0;

    await this.ormRepository.save(suggestion);

    return suggestion;
  }

  public async index(): Promise<Suggestion[] | undefined> {
    const suggestions = await this.ormRepository.find();

    return suggestions;
  }

  public async save(suggestion: Suggestion): Promise<void> {
    await this.ormRepository.save(suggestion);
  }

  public async findById(id: string): Promise<Suggestion | undefined> {
    const suggestion = await this.ormRepository.findOne(id);

    return suggestion;
  }
}
