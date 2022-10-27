import { Contact } from "../../domain/entities/contact";
import { ContactRepository } from "../../domain/repositories/contact_repository";
import ContactModel from "../models/contact.schema";

export class MongoContactRepository implements ContactRepository {
  public create = async (contact: Contact): Promise<any> => {
    const contactCreated = await ContactModel.create(contact);
    return contactCreated;
  };

  public get = async (uuid: string): Promise<any> => {
    const contactGeted = await ContactModel.findById(uuid);
    return contactGeted;
  };

  public update = async (uuid: string, contact: Contact): Promise<any> => {
    const contactUpdated = await ContactModel.findByIdAndUpdate(uuid, contact, {
      new: true,
    });
    return contactUpdated;
  };

  public delete = async (uuid: string): Promise<any> => {
    const contactDeleted = await ContactModel.findByIdAndDelete(uuid);
    return contactDeleted;
  };

  public find = async (): Promise<any> => {
    const contactList = await ContactModel.find();
    return contactList;
  };
}
