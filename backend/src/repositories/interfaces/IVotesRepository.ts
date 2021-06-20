import ICreateVotesDTO from "../../dtos/ICreateVoteDTO";
import Vote from "../../models/Vote";

export default interface IVotesRepository {
    create(data: ICreateVotesDTO): Promise<Vote>;
}