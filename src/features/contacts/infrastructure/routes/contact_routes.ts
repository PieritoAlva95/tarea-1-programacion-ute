import { Router } from "express";
import { createContactController } from "../controllers/create_contact_controller";

const router = Router();

router.post("/contact", createContactController);

export default router;
