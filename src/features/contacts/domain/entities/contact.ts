import { v4 as uuid } from "uuid";

interface ContactEntitiy {
  contactId?: string;
  names: string;
  lastNames: string;
  phoneNumber: string;
  email: string;
}

export class Contact implements ContactEntitiy {
  contactId?: string | undefined;
  names: string;
  lastNames: string;
  phoneNumber: string;
  email: string;

  constructor({ names, lastNames, phoneNumber, email }: ContactEntitiy) {
    this.contactId = uuid();
    this.names = names;
    this.lastNames = lastNames;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}
