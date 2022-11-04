import { Request, Response } from "express";
import { noteServiceFactory } from "../../../../core/dependecy_injection/service_factory";
import { NoteFinderByContactId } from "../../application/use_cases/note_finder_by_contact_id";
import { NoteService } from "../../domain/services/note_service";

export const findNotesByContactIdController = async (
  req: any,
  res: Response
) => {
  try {
    const noteService: NoteService = noteServiceFactory();
    const noteFinderByContactId: NoteFinderByContactId =
      new NoteFinderByContactId(noteService);
    const contactId = req.contactId;
    const response = await noteFinderByContactId.execute(contactId.toString());
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
      notesListFinded: response,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      errorMsg: error,
    });
  }
};
