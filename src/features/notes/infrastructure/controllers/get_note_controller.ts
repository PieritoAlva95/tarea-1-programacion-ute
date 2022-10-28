import { Request, Response } from "express";
import { noteServiceFactory } from "../../../../core/dependecy_injection/service_factory";
import { NoteGetter } from "../../application/use_cases/note_getter";
import { NoteService } from "../../domain/services/note_service";

export const getNoteController = async (req: Request, res: Response) => {
  try {
    const noteService: NoteService = noteServiceFactory();
    const noteGetter: NoteGetter = new NoteGetter(noteService);
    const response = await noteGetter.execute(req.params.id);
    if (!response) {
      res.status(404).json({
        status: "Fail",
        error_msg: "The note does not exist!",
      });
      return;
    }
    res.status(200).json({
      status: "Succes",
      noteCreated: response,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      errorMsg: error,
    });
  }
};
