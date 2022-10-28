import { Note } from "../entities/note";

export interface NoteRepository {
  createNote(note: Note): Promise<Note>;
  getNote(uuid: string): Promise<Note>;
  updateNote(uuid: string, note: Note): Promise<Note>;
  deleteNote(uuid: string): Promise<boolean>;
  findNotesByContactId(contactId: string): Promise<Note[]>;
  findNotes(): Promise<Note[]>;
}
