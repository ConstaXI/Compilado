import { Request, Response } from 'express';
import { container } from "tsyringe";
import CreateMessageService from "../services/messages/CreateMessageService";
import FindMessages from '../services/messages/FindMessages';

export default class MessagesController {
    public async create(request: Request, response: Response) {
        const createMessage = container.resolve(CreateMessageService);

        const message = await createMessage.execute(request.body);

        return response.status(201).json(message);
    }

    public async index(request: Request, response: Response) {
        const findMessages = container.resolve(FindMessages);

        const messages = await findMessages.execute();

        return response.status(200).json(messages);
    }
}