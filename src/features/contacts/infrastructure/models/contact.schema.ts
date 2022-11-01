import { model, Schema } from "mongoose";

const ContactSchema = new Schema(
  {
    names: { type: String, required: true },
    lastNames: { type: String, required: true },
    phoneNumber: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const ContactModel = model("Contact", ContactSchema);

export default ContactModel;
