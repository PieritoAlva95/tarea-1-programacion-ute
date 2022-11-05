import { Contact } from "../entities/contact";

export interface ContactRepository {
  createContact(contact: Contact): Promise<Contact>;
  getContact(uuid: string): Promise<Contact>;
  updateContact(uuid: string, contact: Contact): Promise<Contact>;
  deleteContact(uuid: string): Promise<boolean>;
  findUserContacts(userId: string): Promise<Contact[]>;
  findContact(): Promise<Contact[]>;
}
