import { Note } from "../../domain/entities/note";
import { NoteService } from "../../domain/services/note_service";

export class NoteUpdater {
  noteService: NoteService;

  constructor(noteService: NoteService) {
    this.noteService = noteService;
  }

  public execute = async (uuid: string, note: Note): Promise<Note> => {
    return await this.noteService.updateNoteById(uuid, note);
  };
}
