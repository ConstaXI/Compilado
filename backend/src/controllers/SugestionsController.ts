import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateSugestionService from "../services/sugestions/CreateSugestionService";
import FindAllSugestionsService from "../services/sugestions/FindAllSugestionsService";

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
}