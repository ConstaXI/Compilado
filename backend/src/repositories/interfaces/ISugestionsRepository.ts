import ICreateSugestionDTO from "../../dtos/ICreateSugestionDTO";
import Sugestion from "../../models/Sugestion";

export default interface ICreateMessageDTO {
    create(data: ICreateSugestionDTO): Promise<Sugestion>;
    index(): Promise<Sugestion[] | undefined>;
    save(sugestion: Sugestion): Promise<void>;
    findById(id: string): Promise<Sugestion | undefined>;
}