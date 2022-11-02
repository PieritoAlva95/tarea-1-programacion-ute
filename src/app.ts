import "dotenv/config";
import path from "path";
import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import contactRouter from "./features/contacts/infrastructure/routes/contact_routes";
import noteRouter from "./features/notes/infrastructure/routes/note_routes";
import { initMongoDataBase } from "./core/database/mongo-db";
import { env_vars } from "./core/config/env_vars";

// Redis Sessions
import session from "express-session";
const RedisStore = require("connect-redis")(session);
import { createClient } from "redis";
const redisClient = createClient({
  legacyMode: true,
  socket: {
    host: env_vars.REDIS_URL,
    port: env_vars.REDIS_PORT,
  },
});
redisClient.connect().catch(console.error);

const app = express();

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: env_vars.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 60000,
    },
  })
);

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1", contactRouter);
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
