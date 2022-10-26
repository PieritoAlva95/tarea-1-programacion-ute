import { Contact } from "../domain/entities/contact";
import { ContactService } from "../domain/services/contact_service";

export class ContactGetter {
  contactService: ContactService;

  constructor(contactService: ContactService) {
    this.contactService = contactService;
  }

  public execute = async (uuid: string): Promise<Contact | null> => {
    return await this.contactService.getContactById(uuid);
  };
}
