import { inject, injectable } from "tsyringe";
import ICreateMessageDTO from "../../dtos/ICreateMessageDTO";
import Message from "../../models/Message";
import MessagesRepository from "../../repositories/MessagesRepository";
import UsersRepository from "../../repositories/UsersRepository";

@injectable()
export default class CreateMessageService {
    constructor(
        @inject("MessagesRepository")
        private messagesRepository: MessagesRepository,

        @inject("usersRepository")
        private usersRepository: UsersRepository,
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