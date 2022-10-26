import { ContactService } from "../../features/contacts/domain/services/contact_service";
import { MongoContactRepository } from "../../features/contacts/infrastructure/repository_implementation/mongo_contact_repository";

export const contactServiceFactory = (): ContactService => {
  const contactRepository = new MongoContactRepository();
  const contactService = new ContactService(contactRepository);
  return contactService;
};
