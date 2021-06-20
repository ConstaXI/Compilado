import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateSuggestionService from "../services/suggestions/CreateSuggestionService";
import FindAllSuggestionsService from "../services/suggestions/FindAllSuggestionsService";
import CreateDownVoteService from "../services/votes/CreateDownVoteService";
import CreateUpVoteService from "../services/votes/CreateUpVoteService";

export default class SuggestionsController {
  public async create(request: Request, response: Response) {
    const createSuggestion = container.resolve(CreateSuggestionService);

    const suggestion = await createSuggestion.execute(request.body);

    return response.status(201).json(suggestion);
  }

  public async index(request: Request, response: Response) {
    const findSuggestions = container.resolve(FindAllSuggestionsService);

    const suggestions = await findSuggestions.execute();

    return response.status(200).json(suggestions);
  }

  public async upVote(request: Request, response: Response) {    
    const createUpVote = container.resolve(CreateUpVoteService);

    await createUpVote.execute(request.body);

    return response.status(200).json({ 
        status: 200,
        message: 'Voto registrado',
    });
  }

  public async downVote(request: Request, response: Response) {
    const createDownVote = container.resolve(CreateDownVoteService);

    await createDownVote.execute(request.body);

    return response.status(200).json({ 
        status: 200,
        message: 'Voto registrado',
    });
  }
}
