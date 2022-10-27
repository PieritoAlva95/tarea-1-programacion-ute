import mongoose from "mongoose";

export const initMongoDataBase = async () => {
  await mongoose
    .connect(
      "mongodb://Piero95:j95p250a@mongo-container:27017/?authSource=admin"
    )
    .then(() => console.log("You have successfully connected to the database!"))
    .catch((error) =>
      console.log(
        `An error occurred while trying to connect to the database: ${error}`
      )
    );
};
