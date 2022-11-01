import { Contact } from "../../domain/entities/contact";
import { ContactService } from "../../domain/services/contact_service";

export class ContactSignIn {
  contactService: ContactService;

  constructor(contactService: ContactService) {
    this.contactService = contactService;
  }

  public execute = async (email: string): Promise<Contact> => {
    return await this.contactService.contactSignIn(email);
  };
}
