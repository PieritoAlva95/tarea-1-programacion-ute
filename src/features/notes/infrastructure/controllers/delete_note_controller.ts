import { Request, Response } from "express";
import { noteServiceFactory } from "../../../../core/dependecy_injection/service_factory";
import { NoteDeleter } from "../../application/use_cases/note_deleter";
import { NoteService } from "../../domain/services/note_service";

export const deleteNoteController = async (req: Request, res: Response) => {
  try {
    const noteService: NoteService = noteServiceFactory();
    const noteDeleter: NoteDeleter = new NoteDeleter(noteService);
    const response = await noteDeleter.execute(req.params.id);
    if (!response) {
      res.status(404).json({
        status: "Fail",
        error_msg: "The note to be deleted does not exist!",
      });
    }
    res.status(200).json({
      status: "Succes",
      note_deleted: response,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error_msg: error,
    });
  }
};
