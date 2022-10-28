import { Note } from "../../domain/entities/note";
import { NoteService } from "../../domain/services/note_service";

export class NoteCreator {
  noteService: NoteService;

  constructor(noteService: NoteService) {
    this.noteService = noteService;
  }

  public execute = async (note: Note): Promise<Note> => {
    return await this.noteService.createNote(note);
  };
}
