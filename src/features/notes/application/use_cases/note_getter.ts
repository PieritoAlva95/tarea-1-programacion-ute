import { Note } from "../../domain/entities/note";
import { NoteService } from "../../domain/services/note_service";

export class NoteGetter {
  noteService: NoteService;

  constructor(noteService: NoteService) {
    this.noteService = noteService;
  }

  public execute = async (uuid: string): Promise<Note> => {
    return await this.noteService.getNoteById(uuid);
  };
}
