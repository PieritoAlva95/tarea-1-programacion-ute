interface ContactEntity {
  names: string;
  lastNames: string;
  phoneNumber: string;
  email: string;
}

export class Contact implements ContactEntity {
  names: string;
  lastNames: string;
  phoneNumber: string;
  email: string;

  constructor({ names, lastNames, phoneNumber, email }: ContactEntity) {
    this.names = names;
    this.lastNames = lastNames;
    this.phoneNumber = phoneNumber;
    this.email = phoneNumber;
  }
}
