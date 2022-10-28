import { Note } from "../../domain/entities/note";
import { NoteService } from "../../domain/services/note_service";

export class NoteListFinder {
  noteService: NoteService;

  constructor(noteService: NoteService) {
    this.noteService = noteService;
  }

  public execute = async (): Promise<Note[]> => {
    return await this.noteService.findNotesList();
  };
}
