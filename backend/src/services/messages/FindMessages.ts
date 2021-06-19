import { inject, injectable } from "tsyringe";
import Message from "../../models/Message";
import IMessagesRepository from "../../repositories/interfaces/IMessagesRepository";

@injectable()
export default class FindMessages {
    constructor(
        @inject("MessagesRepository")
        private messagesRepository: IMessagesRepository,
    ) {}

    public async execute(): Promise<Message[] | undefined> {
        const messages = await this.messagesRepository.index();

        return messages;
    }
}