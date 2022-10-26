"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ContactSchema = new mongoose_1.Schema({
    contactId: { type: String },
    names: { type: String },
    lastNames: { type: String },
    phoneNumber: { type: String },
    email: { type: String, unique: true },
}, { timestamps: true });
const ContactModel = (0, mongoose_1.model)("Contact", ContactSchema);
exports.default = ContactModel;
