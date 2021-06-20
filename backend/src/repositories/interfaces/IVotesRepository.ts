import ICreateVotesDTO from "../../dtos/ICreateVoteDTO";
import Vote from "../../models/Vote";

export default interface IVotesRepository {
    create(data: ICreateVotesDTO): Promise<Vote>;
    findByUserID(user_id: string, suggestion_id: string): Promise<Vote | undefined>
}