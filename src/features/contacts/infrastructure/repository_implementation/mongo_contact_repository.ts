import { Contact } from "../../domain/entities/contact";
import { ContactRepository } from "../../domain/repositories/contact_repository";
import ContactModel from "../models/contact.schema";

export class MongoContactRepository implements ContactRepository {
  public createContact = async (contact: Contact): Promise<any> => {
    const contactCreated = await ContactModel.create(contact);
    return contactCreated;
  };
  public getContact = async (uuid: string): Promise<any> => {
    const contactGeted = await ContactModel.findById(uuid);
    return contactGeted;
  };
  public updateContact = async (
    uuid: string,
    contact: Contact
  ): Promise<any> => {
    const contactUpdated = await ContactModel.findByIdAndUpdate(uuid, contact, {
      new: true,
    });
    return contactUpdated;
  };
  public deleteContact = async (uuid: string): Promise<any> => {
    const contactDeleted = await ContactModel.findByIdAndDelete(uuid);
    return contactDeleted;
  };
  public findUserContacts = async (userId: string): Promise<any> => {
    const contactList = await ContactModel.find({ userId: userId }).sort({
      createdAt: -1,
    });
    return contactList;
  };
  public findContact = async (): Promise<any> => {
    const contactList = await ContactModel.find().sort({ createdAt: -1 });
    return contactList;
  };
}
