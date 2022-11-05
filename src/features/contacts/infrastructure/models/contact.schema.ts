import { model, Schema } from "mongoose";

const ContactSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    names: { type: String, required: true },
    lastNames: { type: String, required: true },
    phoneNumber: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ContactModel = model("Contact", ContactSchema);

export default ContactModel;
