import "dotenv/config";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRouter from "./features/users/infrastructure/routes/user_routes";
import noteRouter from "./features/notes/infrastructure/routes/note_routes";
import { initMongoDataBase } from "./core/database/mongo-db";
import { env_vars } from "./core/config/env_vars";

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1", userRouter);
app.use("/api/v1", noteRouter);

// Init Server
app.listen(env_vars.APP_PORT, () => {
  console.log(`Server running on http:localhost:${env_vars.APP_PORT}!`);
});

// Health route
app.get("/health", (_: Request, res: Response) => {
  res.status(200).json({
    status: "Succes",
    msg: "The server is running normally!",
  });
});

//Data Bases
initMongoDataBase();
