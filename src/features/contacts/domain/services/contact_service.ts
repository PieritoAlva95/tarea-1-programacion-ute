import { Contact } from "../entities/contact";
import { ContactRepository } from "../repositories/contact_repository";

export class ContactService {
  contactRepository: ContactRepository;

  constructor(contactRepository: ContactRepository) {
    this.contactRepository = contactRepository;
  }

  createContact(contact: Contact): Promise<Contact> {
    const contactCreated: Promise<Contact> =
      this.contactRepository.create(contact);
    return contactCreated;
  }

  getContactById(uuid: string): Promise<Contact | null> {
    const contactFinded: Promise<Contact | null> =
      this.contactRepository.get(uuid);
    return contactFinded;
  }

  updateContactById(uuid: string, contact: Contact): Promise<Contact | null> {
    const contactUpdated: Promise<Contact | null> =
      this.contactRepository.update(uuid, contact);
    return contactUpdated;
  }

  deleteContactById(uuid: string): Promise<boolean> {
    const isContactDeleted: Promise<boolean> =
      this.contactRepository.delete(uuid);
    return isContactDeleted;
  }

  findContactList(): Promise<Contact[]> {
    const contactList: Promise<Contact[]> = this.contactRepository.find();
    return contactList;
  }
}
