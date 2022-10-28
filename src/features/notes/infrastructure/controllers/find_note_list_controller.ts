import { Request, Response } from "express";
import { noteServiceFactory } from "../../../../core/dependecy_injection/service_factory";
import { NoteListFinder } from "../../application/use_cases/note_list_finder";
import { NoteService } from "../../domain/services/note_service";

export const findNoteListController = async (_: Request, res: Response) => {
  try {
    const noteService: NoteService = noteServiceFactory();
    const noteListFinder: NoteListFinder = new NoteListFinder(noteService);
    const response = await noteListFinder.execute();
    if (response.length === 0) {
      res.status(404).json({
        status: "Fail",
        errorMsg: "There are no notes recorded!",
      });
      return;
    }
    res.status(200).json({
      status: "Succes",
      listLength: response.length,
      noteListFinded: response,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      errorMsg: error,
    });
  }
};
