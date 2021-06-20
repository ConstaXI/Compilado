import { Router } from "express";

import usersRouter from "./routes/users.routes";
import authRouter from "./routes/authenticate.routes";
import messagesRouter from "./routes/messages.routes";
import suggestionsRouter from "./routes/suggestions.routes";
import votesRouter from "./routes/votes.routes";

export const routes = Router();

routes.use("/users", usersRouter);
routes.use("/auth", authRouter);
routes.use("/messages", messagesRouter);
routes.use("/suggestions", suggestionsRouter);
routes.use("/votes", votesRouter);

export default routes;
