import { model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    names: { type: String, required: true },
    lastNames: { type: String, required: true },
    phoneNumber: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = model("User", UserSchema);

export default UserModel;
