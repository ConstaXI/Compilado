import ICreateMessageDTO from "../../dtos/ICreateMessageDTO";
import Message from "../../models/Message";

export default interface IMessagesRepository {
  create(data: ICreateMessageDTO): Promise<Message>;
  
  index(): Promise<Message[] | undefined>;
}
