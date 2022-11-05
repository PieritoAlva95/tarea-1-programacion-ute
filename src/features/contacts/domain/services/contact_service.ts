import { Contact } from "../entities/contact";
import { ContactRepository } from "../repositories/contact_repository";

export class ContactService {
  contactRepository: ContactRepository;

  constructor(contactRepository: ContactRepository) {
    this.contactRepository = contactRepository;
  }

  createContact(contact: Contact): Promise<Contact> {
    const contactCreated: Promise<Contact> =
      this.contactRepository.createContact(contact);
    return contactCreated;
  }

  getContactById(uuid: string): Promise<Contact> {
    const contactFinded: Promise<Contact> =
      this.contactRepository.getContact(uuid);
    return contactFinded;
  }

  updateContactById(uuid: string, contact: Contact): Promise<Contact> {
    const contactUpdated: Promise<Contact> =
      this.contactRepository.updateContact(uuid, contact);
    return contactUpdated;
  }

  deleteContactById(uuid: string): Promise<boolean> {
    const isContactDeleted: Promise<boolean> =
      this.contactRepository.deleteContact(uuid);
    return isContactDeleted;
  }

  findUserContacts(userId: string): Promise<Contact[]> {
    const contactsListFinded: Promise<Contact[]> =
      this.contactRepository.findUserContacts(userId);
    return contactsListFinded;
  }

  findContactList(): Promise<Contact[]> {
    const contactList: Promise<Contact[]> =
      this.contactRepository.findContact();
    return contactList;
  }
}
