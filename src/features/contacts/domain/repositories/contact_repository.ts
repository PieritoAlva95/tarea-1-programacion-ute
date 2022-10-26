import { Contact } from "../entities/contact";

export interface ContactRepository {
  create(contact: Contact): Promise<Contact>;
  get(uuid: string): Promise<Contact | null>;
  update(uuid: string, contact: Contact): Promise<Contact>;
  delete(uuid: string): Promise<boolean>;
  find(): Promise<Contact[]>;
}
