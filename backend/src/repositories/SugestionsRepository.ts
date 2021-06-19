import { getRepository, Repository } from "typeorm";
import ICreateSugestionDTO from "../dtos/ICreateSugestionDTO";
import Sugestion from "../models/Sugestion";
import ISugestionsRepository from "./interfaces/ISugestionsRepository";

export default class SugestionsRepository implements ISugestionsRepository {
    private ormRepository: Repository<Sugestion>
    
    constructor() {
        this.ormRepository = getRepository(Sugestion);
    }

    public async create(data: ICreateSugestionDTO): Promise<Sugestion> {
        const sugestion = this.ormRepository.create(data);

        sugestion.votes = 0;

        await this.ormRepository.save(sugestion);

        return sugestion;
    }

    public async index(): Promise<Sugestion[] | undefined> {
        const sugestions = await this.ormRepository.find();

        return sugestions;
    }

    public async save(sugestion: Sugestion): Promise<void> {
        await this.ormRepository.save(sugestion);
    }

    public async findById(id: string): Promise<Sugestion | undefined> {
        const sugestion = await this.ormRepository.findOne({
            where: { id }
        });

        return sugestion;
    }
}
