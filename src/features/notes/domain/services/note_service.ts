import { Note } from "../entities/note";
import { NoteRepository } from "../repositories/note_repository";

export class NoteService {
  noteRepository: NoteRepository;

  constructor(noteRepository: NoteRepository) {
    this.noteRepository = noteRepository;
  }

  createNote(note: Note): Promise<Note> {
    const noteCreated: Promise<Note> = this.noteRepository.createNote(note);
    return noteCreated;
  }

  getNoteById(uuid: string): Promise<Note> {
    const noteFinded: Promise<Note> = this.noteRepository.getNote(uuid);
    return noteFinded;
  }

  updateNoteById(uuid: string, note: Note): Promise<Note> {
    const noteUpdated: Promise<Note> = this.noteRepository.updateNote(
      uuid,
      note
    );
    return noteUpdated;
  }

  deleteNoteById(uuid: string): Promise<boolean> {
    const isNoteDeleted: Promise<boolean> =
      this.noteRepository.deleteNote(uuid);
    return isNoteDeleted;
  }

  findNotesByContactId(uuid: string): Promise<Note[]> {
    const notesListFinded: Promise<Note[]> =
      this.noteRepository.findNotesByUserId(uuid);
    return notesListFinded;
  }

  findNotesList(): Promise<Note[]> {
    const notesListFinded: Promise<Note[]> = this.noteRepository.findNotes();
    return notesListFinded;
  }
}
