import { Router } from "express";
import { protect } from "../../../../core/shared/middlewares/auth_middleware";
import { createNoteController } from "../controllers/create_note_controller";
import { deleteNoteController } from "../controllers/delete_note_controller";
import { findNotesByContactIdController } from "../controllers/find_notes_by_contact_id_controller";
import { findNoteListController } from "../controllers/find_note_list_controller";
import { getNoteController } from "../controllers/get_note_controller";
import { updateNoteController } from "../controllers/update_note_controller";

const router = Router();

router.post("/notes", protect, createNoteController);
router.get("/notes", findNoteListController);
router.get("/notes/:id", protect, getNoteController);
router.get("/contact-notes", protect, findNotesByContactIdController);
router.put("/notes/:id", protect, updateNoteController);
router.delete("/notes/:id", protect, deleteNoteController);

export default router;
