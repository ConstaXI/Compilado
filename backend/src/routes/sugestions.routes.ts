import SugestionsController from "../controllers/SugestionsController";
import { Router } from "express";

const sugestionsController = new SugestionsController();
const sugestionsRouter = Router();

sugestionsRouter.post('/', sugestionsController.create);
sugestionsRouter.get('/', sugestionsController.index);
sugestionsRouter.put('/up/:id', sugestionsController.upVote);
sugestionsRouter.put('/down/:id', sugestionsController.downVote);

export default sugestionsRouter;