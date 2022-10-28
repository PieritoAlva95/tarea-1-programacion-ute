import { Note } from "../entities/notes";

export interface NoteRepository {
  createNote(note: Note): Promise<Note>;
  getNote(uuid: string): Promise<Note>;
  updateNote(uuid: string, note: Note): Promise<Note>;
  deleteNote(uuid: string): Promise<boolean>;
  findNotesByUserId(userId: string): Promise<Note[]>;
  findNotes(): Promise<Note[]>;
}
