interface ContactEntitiy {
  names: string;
  lastNames: string;
  phoneNumber: string;
  email: string;
  password: string;
}

export class Contact implements ContactEntitiy {
  names: string;
  lastNames: string;
  phoneNumber: string;
  email: string;
  password: string;

  constructor({
    names,
    lastNames,
    phoneNumber,
    email,
    password,
  }: ContactEntitiy) {
    this.names = names;
    this.lastNames = lastNames;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
  }
}
