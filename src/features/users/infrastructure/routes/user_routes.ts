import { Router } from "express";
import { protect } from "../../../../core/shared/middlewares/auth_middleware";
import { signUpUserController } from "../controllers/sign_up_user_controller";
import { deleteUserController } from "../controllers/delete_user_controller";
import { getUserController } from "../controllers/get_user_controller";
import { findUserListController } from "../controllers/get_user_list_controller";
import { signInUserController } from "../controllers/sign_in_user_controller";
import { updateUserController } from "../controllers/update_user_controller";

const router = Router();

router.post("/users/signup", signUpUserController);
router.get("/users", protect, findUserListController);
router.get("/users/:id", protect, getUserController);
router.put("/users/:id", protect, updateUserController);
router.delete("/users/:id", protect, deleteUserController);
router.post("/users/signin", signInUserController);

export default router;
