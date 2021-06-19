import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateSugestionService from "../services/sugestions/CreateSugestionService";
import DownVoteService from "../services/sugestions/DownVoteService";
import FindAllSugestionsService from "../services/sugestions/FindAllSugestionsService";
import UpVoteService from "../services/sugestions/UpVoteService";

export default class SugestionsController {
  public async create(request: Request, response: Response) {
    const createSugestion = container.resolve(CreateSugestionService);

    const sugestion = await createSugestion.execute(request.body);

    return response.status(201).json(sugestion);
  }

  public async index(request: Request, response: Response) {
    const findSugestions = container.resolve(FindAllSugestionsService);

    const sugestions = await findSugestions.execute();

    return response.status(200).json(sugestions);
  }

  public async upVote(request: Request, response: Response) {
    const { id } = request.params;

    const upVote = container.resolve(UpVoteService);

    await upVote.execute(id);

    return response.status(200).json({ 
        status: 200,
        message: 'Voto registrado',
    });
  }

  public async downVote(request: Request, response: Response) {
    const { id } = request.params;

    const downVote = container.resolve(DownVoteService);

    await downVote.execute(id);

    return response.status(200).json({ 
        status: 200,
        message: 'Voto registrado',
    });
  }
}
