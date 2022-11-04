import { Contact } from "../domain/entities/contact";
import { ContactService } from "../domain/services/contact_service";

export class ContactCreator {
  contactService: ContactService;

  constructor(contactService: ContactService) {
    this.contactService = contactService;
  }

  public execute = async (contact: Contact): Promise<Contact> => {
    return await this.contactService.createContact(contact);
  };
}
