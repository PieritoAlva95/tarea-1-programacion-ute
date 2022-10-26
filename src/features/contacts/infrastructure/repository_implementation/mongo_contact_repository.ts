import { Contact } from "../../domain/entities/contact";
import { ContactRepository } from "../../domain/repositories/contact_repository";

const MOCK_CONTACT = {
  contactId: "0000-0000-0000",
  names: "Names Mock",
  lastNames: "Apellidos Mock",
  phoneNumber: "0999081750",
  email: "mock@gmail.com",
};

export class MongoContactRepository implements ContactRepository {
  public create = async (contact: Contact): Promise<Contact> => {
    console.log("MongoContactRepository => create()");
    const contactCreated = MOCK_CONTACT;
    return contactCreated;
  };

  public get = async (uuid: string): Promise<Contact | null> => {
    console.log("MongoContactRepository => get()");
    const contactGeted = MOCK_CONTACT;
    return contactGeted;
  };

  public update = async (uuid: string, contact: Contact): Promise<Contact> => {
    console.log("MongoContactRepository => update()");
    const contactUpdated = MOCK_CONTACT;
    return contactUpdated;
  };

  public delete = async (uuid: string): Promise<boolean> => {
    console.log("MongoContactRepository => delete()");
    const contactDeleted = MOCK_CONTACT;
    return true;
  };

  public find = async (): Promise<Contact[]> => {
    throw new Error("Method not implemented.");
  };
}
