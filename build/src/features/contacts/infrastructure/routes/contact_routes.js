"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_contact_controller_1 = require("../controllers/create_contact_controller");
const router = (0, express_1.Router)();
router.post("/contact", create_contact_controller_1.createContactController);
exports.default = router;
