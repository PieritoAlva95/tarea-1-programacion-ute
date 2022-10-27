import "dotenv/config";
import express from "express";
import cors from "cors";
import contactRouter from "../src/features/contacts/infrastructure/routes/contact_routes";
import { initMongoDataBase } from "./core/database/mongo-db";
import { env_vars } from "./core/config/env_vars";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", contactRouter);

// Init Server
app.listen(env_vars.APP_PORT, () => {
  console.log(`Server running on http:localhost:${env_vars.APP_PORT}!`);
});

//Data Bases
initMongoDataBase();
