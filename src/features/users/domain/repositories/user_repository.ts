import { User } from "../entities/user";

export interface UserRepository {
  create(user: User): Promise<User>;
  get(uuid: string): Promise<User | null>;
  update(uuid: string, user: User): Promise<User>;
  delete(uuid: string): Promise<boolean>;
  find(): Promise<User[]>;
  signIn(email: string): Promise<User>;
}
