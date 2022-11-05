interface ContactEntity {
  userId: string;
  names: string;
  lastNames: string;
  phoneNumber: string;
  email: string;
}

export class Contact implements ContactEntity {
  userId: string;
  names: string;
  lastNames: string;
  phoneNumber: string;
  email: string;

  constructor({ userId, names, lastNames, phoneNumber, email }: ContactEntity) {
    this.userId = userId;
    this.names = names;
    this.lastNames = lastNames;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}
