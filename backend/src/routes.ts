import { Router } from "express";

import usersRouter from "./routes/users.routes";
import authRouter from "./routes/authenticate.routes";
import messagesRouter from "./routes/messages.routes";

export const routes = Router();

routes.use("/users", usersRouter);
routes.use("/auth", authRouter);
routes.use("/messages", messagesRouter);

export default routes;
