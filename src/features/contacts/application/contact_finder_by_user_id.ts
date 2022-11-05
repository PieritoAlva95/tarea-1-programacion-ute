import { Contact } from "../domain/entities/contact";
import { ContactService } from "../domain/services/contact_service";

export class ContactFinderByUserId {
  contactService: ContactService;

  constructor(contactService: ContactService) {
    this.contactService = contactService;
  }

  public execute = async (userId: string): Promise<Contact[]> => {
    return await this.contactService.findUserContacts(userId);
  };
}
