import { Router } from "express";
import MessagesController from "../controllers/MessagesController";

const messagesController = new MessagesController();
const messagesRouter = Router();

messagesRouter.get('/', messagesController.index);
messagesRouter.post('/', messagesController.create);

export default messagesRouter;