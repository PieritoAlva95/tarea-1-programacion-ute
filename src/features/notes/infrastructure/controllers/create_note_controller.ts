import { Request, Response } from "express";
import { noteServiceFactory } from "../../../../core/dependecy_injection/service_factory";
import { NoteCreator } from "../../application/use_cases/note_creator";
import { NoteService } from "../../domain/services/note_service";

export const createNoteController = async (req: Request, res: Response) => {
  try {
    const noteService: NoteService = noteServiceFactory();
    const noteCreator: NoteCreator = new NoteCreator(noteService);
    const response = await noteCreator.execute(req.body);
    res.status(200).json({
      status: "Succes",
      note_created: response,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      errorMsg: error,
    });
  }
};
