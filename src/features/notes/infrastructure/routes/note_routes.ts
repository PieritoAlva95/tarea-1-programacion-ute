import { Router } from "express";
import { createNoteController } from "../controllers/create_note_controller";
import { findNotesByContactIdController } from "../controllers/find_notes_by_contact_id_controller";
import { findNoteListController } from "../controllers/find_note_list_controller";
import { getNoteController } from "../controllers/get_note_controller";

const router = Router();

router.post("/notes", createNoteController);
router.get("/notes", findNoteListController);
router.get("/contact-notes", findNotesByContactIdController);
router.get("/notes/:id", getNoteController);

export default router;
