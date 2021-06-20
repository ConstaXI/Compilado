import ICreateSuggestionDTO from "../../dtos/ICreateSuggestionDTO";
import Suggestion from "../../models/Suggestion";

export default interface ICreateMessageDTO {
    create(data: ICreateSuggestionDTO): Promise<Suggestion>;
    index(): Promise<Suggestion[] | undefined>;
    save(suggestion: Suggestion): Promise<void>;
    findById(id: string): Promise<Suggestion | undefined>;
}