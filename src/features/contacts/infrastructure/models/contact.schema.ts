import { model, Schema } from "mongoose";

const ContactSchema = new Schema(
  {
    contactId: { type: String },
    names: { type: String },
    lastNames: { type: String },
    phoneNumber: { type: String },
    email: { type: String },
  },
  { timestamps: true }
);

const ContactModel = model("Contact", ContactSchema);

export default ContactModel;
