import { Router } from "express";

import usersRouter from "./routes/users.routes";
import authRouter from "./routes/authenticate.routes";
import messagesRouter from "./routes/messages.routes";
import sugestionsRouter from "./routes/sugestions.routes";

export const routes = Router();

routes.use("/users", usersRouter);
routes.use("/auth", authRouter);
routes.use("/messages", messagesRouter);
routes.use("/sugestions", sugestionsRouter);

export default routes;
