"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactUpdater = void 0;
class ContactUpdater {
    constructor(contactService) {
        this.execute = (uuid, contact) => __awaiter(this, void 0, void 0, function* () {
            return yield this.contactService.updateContactById(uuid, contact);
        });
        this.contactService = contactService;
    }
}
exports.ContactUpdater = ContactUpdater;
