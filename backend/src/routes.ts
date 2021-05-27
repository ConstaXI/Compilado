import {Router} from 'express';

import usersRouter from "./routes/users";

export const routes = Router();

routes.use('/users', usersRouter);

export default routes;