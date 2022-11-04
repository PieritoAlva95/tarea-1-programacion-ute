import { Contact } from "../domain/entities/contact";
import { ContactService } from "../domain/services/contact_service";

export class ContactListFinder {
  contactService: ContactService;

  constructor(contactService: ContactService) {
    this.contactService = contactService;
  }

  public execute = async (): Promise<Contact[]> => {
    return await this.contactService.findContactList();
  };
}
