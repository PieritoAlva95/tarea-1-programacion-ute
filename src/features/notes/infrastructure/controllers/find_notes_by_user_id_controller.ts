import { Response } from "express";
import { noteServiceFactory } from "../../../../core/dependecy_injection/service_factory";
import { NoteFinderByUserId } from "../../application/use_cases/note_finder_by_user_id";
import { NoteService } from "../../domain/services/note_service";

export const findNotesByUserIdController = async (req: any, res: Response) => {
  try {
    const noteService: NoteService = noteServiceFactory();
    const noteFinderByUserId: NoteFinderByUserId = new NoteFinderByUserId(
      noteService
    );
    const userId = req.userId;
    const response = await noteFinderByUserId.execute(userId);
    if (response.length === 0) {
      res.status(404).json({
        status: "Fail",
        error_msg: "There are no notes recorded!",
      });
      return;
    }
    res.status(200).json({
      status: "Succes",
      list_length: response.length,
      notes_list_finded: response,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      errorMsg: error,
    });
  }
};
