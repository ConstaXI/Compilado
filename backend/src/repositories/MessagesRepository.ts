import { Repository, getRepository } from "typeorm";
import ICreateMessageDTO from "../dtos/ICreateMessageDTO";
import Message from "../models/Message";
import IMessagesRepository from "./interfaces/IMessagesRepository";

export default class MessagesRepository implements IMessagesRepository {
  private ormRepository: Repository<Message>;

  constructor() {
    this.ormRepository = getRepository(Message);
  }

  public async create(data: ICreateMessageDTO): Promise<Message> {
    const message = this.ormRepository.create(data);

    await this.ormRepository.save(message);

    return message;
  }

  public async index(): Promise<Message[] | undefined> {
    const messages = await this.ormRepository.find();

    return messages;
  }
}
