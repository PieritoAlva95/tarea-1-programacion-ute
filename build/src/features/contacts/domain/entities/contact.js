"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const uuid_1 = require("uuid");
class Contact {
    constructor({ names, lastNames, phoneNumber, email }) {
        this.contactId = (0, uuid_1.v4)();
        this.names = names;
        this.lastNames = lastNames;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}
exports.Contact = Contact;
