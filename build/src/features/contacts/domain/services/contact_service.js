"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
class ContactService {
    constructor(contactRepository) {
        this.contactRepository = contactRepository;
    }
    createContact(contact) {
        const contactCreated = this.contactRepository.create(contact);
        return contactCreated;
    }
    getContactById(uuid) {
        const contactFinded = this.contactRepository.get(uuid);
        return contactFinded;
    }
    updateContactById(uuid, contact) {
        const contactUpdated = this.contactRepository.update(uuid, contact);
        return contactUpdated;
    }
    deleteContactById(uuid) {
        const isContactDeleted = this.contactRepository.delete(uuid);
        return isContactDeleted;
    }
}
exports.ContactService = ContactService;
