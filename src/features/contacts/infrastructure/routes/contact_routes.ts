import { Router } from "express";
import { createContactController } from "../controllers/create_contact_controller";

const router = Router();

router.post("/user", createContactController);

export default router;
