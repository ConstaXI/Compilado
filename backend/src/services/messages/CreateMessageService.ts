import { inject, injectable } from "tsyringe";
import ICreateMessageDTO from "../../dtos/ICreateMessageDTO";
import Message from "../../models/Message";
import IMessagesRepository from "../../repositories/interfaces/IMessagesRepository";
import IUsersRepository from "../../repositories/interfaces/IUsersRepository";

@injectable()
export default class CreateMessageService {
    constructor(
        @inject("MessagesRepository")
        private messagesRepository: IMessagesRepository,

        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
    ) {}

    public async execute(data: ICreateMessageDTO): Promise<Message> {
        const user = await this.usersRepository.findByID(data.user_id);

        if(!user) {
            throw new Error("User doesn't exist");
        }

        const message = await this.messagesRepository.create(data);

        return message;
    }
}