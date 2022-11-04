import { ContactService } from "../domain/services/contact_service";

export class ContactDeleter {
  contactService: ContactService;

  constructor(contactService: ContactService) {
    this.contactService = contactService;
  }

  public execute = async (uuid: string): Promise<boolean> => {
    return await this.contactService.deleteContactById(uuid);
  };
}
