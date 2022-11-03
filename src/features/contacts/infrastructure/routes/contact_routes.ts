import { Router } from "express";
import { protect } from "../../../../core/shared/middlewares/auth_middleware";
import { createContactController } from "../controllers/create_contact_controller";
import { deleteContactController } from "../controllers/delete_contact_controller";
import { getContactController } from "../controllers/get_contact_controller";
import { findContactListController } from "../controllers/get_contact_list_controller";
import { signInContactController } from "../controllers/sign_in_contact_controller";
import { updateContactController } from "../controllers/update_contact_controller";

const router = Router();

router.post("/contacts", createContactController);
router.get("/contacts", protect, findContactListController);
router.get("/contacts/:id", getContactController);
router.put("/contacts/:id", updateContactController);
router.delete("/contacts/:id", deleteContactController);
router.post("/contacts/signin", signInContactController);

export default router;
