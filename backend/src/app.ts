import express from "express";
import "reflect-metadata";
import "./container";
import createConnection from "./database";
import routes from "./routes";
import cors from "cors";

createConnection();
export const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);