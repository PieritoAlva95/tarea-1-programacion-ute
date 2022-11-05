import { model, Schema } from "mongoose";

const NoteSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    title: { require: true, type: String },
    body: { require: true, type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const NoteModel = model("Note", NoteSchema);

export default NoteModel;
