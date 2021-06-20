import { Response, Request } from 'express'
import { container } from 'tsyringe'
import FindVoteService from '../services/votes/FindVoteService'

export default class VotesController {
    public async findOne(request: Request, response: Response) {
        const findVote = container.resolve(FindVoteService);

        const { user_id, suggestion_id } = request.params;

        const vote = await findVote.execute(user_id, suggestion_id);

        return response.status(200).json(vote);
    }
}