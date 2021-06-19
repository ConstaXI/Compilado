import SugestionsController from "../controllers/SugestionsController";
import { Router } from "express";

const sugestionsController = new SugestionsController();
const sugestionsRouter = Router();

sugestionsRouter.post('/', sugestionsController.create);
sugestionsRouter.get('/', sugestionsController.index);

export default sugestionsRouter;