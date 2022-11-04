import { Note } from "../../domain/entities/note";
import { NoteRepository } from "../../domain/repositories/note_repository";
import NoteModel from "../models/note.schema";

export class MongoNoteRepository implements NoteRepository {
  public createNote = async (note: Note): Promise<any> => {
    const noteCreated = await NoteModel.create(note);
    return noteCreated;
  };

  public getNote = async (uuid: string): Promise<any> => {
    const noteFinded = await NoteModel.findById(uuid);
    return noteFinded;
  };

  public updateNote = async (uuid: string, note: Note): Promise<any> => {
    const noteUpdated = await NoteModel.findByIdAndUpdate(uuid, note, {
      new: true,
    });
    return noteUpdated;
  };

  public deleteNote = async (uuid: string): Promise<any> => {
    const isNoteDeleted = await NoteModel.findByIdAndDelete(uuid);
    return isNoteDeleted;
  };

  public findNotesByContactId = async (uuid: string): Promise<any> => {
    const noteList = await NoteModel.find({ contactId: uuid }).sort({
      createdAt: -1,
    });
    return noteList;
  };

  public findNotes = async (): Promise<any> => {
    const noteList = await NoteModel.find().sort({ createdAt: -1 });
    return noteList;
  };
}
