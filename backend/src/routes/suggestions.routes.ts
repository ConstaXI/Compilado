import SuggestionsController from "../controllers/SuggestionsController";
import { Router } from "express";

const suggestionsController = new SuggestionsController();
const suggestionsRouter = Router();

suggestionsRouter.post('/', suggestionsController.create);
suggestionsRouter.get('/', suggestionsController.index);
suggestionsRouter.post('/up', suggestionsController.upVote);
suggestionsRouter.post('/down', suggestionsController.downVote);

export default suggestionsRouter;