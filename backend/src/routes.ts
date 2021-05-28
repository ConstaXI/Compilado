import { Router } from "express";

import usersRouter from "./routes/users.routes";
import authRouter from "./routes/authenticate.routes";

export const routes = Router();

routes.use("/users", usersRouter);
routes.use("/auth", authRouter);

export default routes;
