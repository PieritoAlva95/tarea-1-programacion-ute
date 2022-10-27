import mongoose from "mongoose";
import { env_vars } from "../config/env_vars";

export const initMongoDataBase = async () => {
  const mongoURL = `mongodb://${env_vars.MONGO_USER}:${env_vars.MONGO_PASSWORD}@${env_vars.MONGO_IP}:${env_vars.MONGO_PORT}/?authSource=admin`;
  await mongoose
    .connect(mongoURL)
    .then(() => console.log("You have successfully connected to the database!"))
    .catch((error) =>
      console.log(
        `An error occurred while trying to connect to the database: ${error}`
      )
    );
};
