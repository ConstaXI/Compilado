import { getRepository } from "typeorm";
import { Repository } from "typeorm/repository/Repository";
import ICreateVotesDTO from "../dtos/ICreateVoteDTO";
import Vote from "../models/Vote";
import IVotesRepository from "./interfaces/IVotesRepository";

export default class VotesRepository implements IVotesRepository {
  private ormRepository: Repository<Vote>;

  constructor() {
    this.ormRepository = getRepository(Vote);
  }

  public async create(data: ICreateVotesDTO): Promise<Vote> {
    const vote = this.ormRepository.create(data);

    await this.ormRepository.save(vote);

    return vote;
  }

  public async findByUserID(user_id: string, suggestion_id: string): Promise<Vote | undefined> {
    const vote = await this.ormRepository.findOne({
      where: { user_id, suggestion_id }
    });

    return vote;
  }
}
