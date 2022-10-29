import { Request, Response } from "express";
import { noteServiceFactory } from "../../../../core/dependecy_injection/service_factory";
import { NoteUpdater } from "../../application/use_cases/note_updater";
import { NoteService } from "../../domain/services/note_service";

export const updateNoteController = async (req: Request, res: Response) => {
  try {
    const noteService: NoteService = noteServiceFactory();
    const noteUpdater: NoteUpdater = new NoteUpdater(noteService);
    const response = await noteUpdater.execute(req.params.id, req.body);
    if (!response) {
      res.status(404).json({
        status: "Fail",
        error_msg: "The note to be updated does not exist!",
      });
      return;
    }
    res.status(200).json({
      status: "Succes",
      note_updated: response,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error_msg: error,
    });
  }
};
