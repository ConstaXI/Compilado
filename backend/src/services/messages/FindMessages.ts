import { inject, injectable } from "tsyringe";
import Message from "../../models/Message";
import MessagesRepository from "../../repositories/MessagesRepository";

@injectable()
export default class FindMessages {
    constructor(
        @inject("MessagesRepository")
        private messagesRepository: MessagesRepository,
    ) {}

    public async execute(): Promise<Message[] | undefined> {
        const messages = await this.messagesRepository.index();

        return messages;
    }
}