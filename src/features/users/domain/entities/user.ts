interface UserEntitiy {
  names: string;
  lastNames: string;
  phoneNumber: string;
  email: string;
  password: string;
}

export class User implements UserEntitiy {
  names: string;
  lastNames: string;
  phoneNumber: string;
  email: string;
  password: string;

  constructor({ names, lastNames, phoneNumber, email, password }: UserEntitiy) {
    this.names = names;
    this.lastNames = lastNames;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
  }
}
