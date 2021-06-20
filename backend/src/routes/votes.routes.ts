import VotesController from "../controllers/VotesController";
import { Router } from "express";

const votesController = new VotesController();
const votesRouter = Router();

votesRouter.get('/:user_id&:suggestion_id', votesController.findOne);

export default votesRouter;