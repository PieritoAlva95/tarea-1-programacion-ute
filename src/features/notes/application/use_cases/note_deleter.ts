import { NoteService } from "../../domain/services/note_service";

export class NoteDeleter {
  noteService: NoteService;

  constructor(noteService: NoteService) {
    this.noteService = noteService;
  }

  public execute = async (uuid: string): Promise<boolean> => {
    return await this.noteService.deleteNoteById(uuid);
  };
}
