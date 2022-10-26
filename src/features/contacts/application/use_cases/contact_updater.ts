import { Contact } from "../domain/entities/contact";
import { ContactService } from "../domain/services/contact_service";

export class ContactUpdater {
  contactService: ContactService;

  constructor(contactService: ContactService) {
    this.contactService = contactService;
  }

  public execute = async (
    uuid: string,
    contact: Contact
  ): Promise<Contact | null> => {
    return await this.contactService.updateContactById(uuid, contact);
  };
}
