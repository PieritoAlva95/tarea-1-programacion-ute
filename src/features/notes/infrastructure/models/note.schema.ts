import { model, Schema } from "mongoose";

const NoteSchema = new Schema(
  {
    contactId: { require: true, type: Schema.Types.ObjectId, ref: "Contact" },
    title: { require: true, type: String },
    body: { require: true, type: String },
  },
  { timestamps: true }
);

const NoteModel = model("Note", NoteSchema);

export default NoteModel;
