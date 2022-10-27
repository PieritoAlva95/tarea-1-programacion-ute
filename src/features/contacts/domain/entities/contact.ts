interface ContactEntitiy {
  names: string;
  lastNames: string;
  phoneNumber: string;
  email: string;
}

export class Contact implements ContactEntitiy {
  names: string;
  lastNames: string;
  phoneNumber: string;
  email: string;

  constructor({ names, lastNames, phoneNumber, email }: ContactEntitiy) {
    this.names = names;
    this.lastNames = lastNames;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}
