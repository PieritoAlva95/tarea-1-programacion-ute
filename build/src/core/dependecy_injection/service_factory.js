"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactServiceFactory = void 0;
const contact_service_1 = require("../../features/contacts/domain/services/contact_service");
const mongo_contact_repository_1 = require("../../features/contacts/infrastructure/repository_implementation/mongo_contact_repository");
const contactServiceFactory = () => {
    const contactRepository = new mongo_contact_repository_1.MongoContactRepository();
    const contactService = new contact_service_1.ContactService(contactRepository);
    return contactService;
};
exports.contactServiceFactory = contactServiceFactory;
