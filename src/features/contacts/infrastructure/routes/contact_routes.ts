import { Router } from "express";
import { protect } from "../../../../core/shared/middlewares/auth_middleware";
import { createContactController } from "../controllers/create_contact_controller";
import { deleteContactController } from "../controllers/delete_contact_controller";
import { findContactsByUserIdController } from "../controllers/find_contacts_by_user_id_controller";
import { getContactController } from "../controllers/get_contact_controller";
import { findContactListController } from "../controllers/get_contact_list_controller";
import { updateContactController } from "../controllers/update_contact_controller";

const router = Router();

router.post("/contacts", protect, createContactController);
router.get("/contacts", findContactListController);
router.get("/contacts/:id", getContactController);
router.get("/user-contacts", protect, findContactsByUserIdController);
router.put("/contacts/:id", updateContactController);
router.delete("/contacts/:id", deleteContactController);

export default router;
