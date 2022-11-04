import { User } from "../entities/user";
import { UserRepository } from "../repositories/user_repository";

export class UserService {
  userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  createUser(user: User): Promise<User> {
    const userCreated: Promise<User> = this.userRepository.create(user);
    return userCreated;
  }

  getUserById(uuid: string): Promise<User | null> {
    const userFinded: Promise<User | null> = this.userRepository.get(uuid);
    return userFinded;
  }

  updateUserById(uuid: string, user: User): Promise<User | null> {
    const userUpdated: Promise<User | null> = this.userRepository.update(
      uuid,
      user
    );
    return userUpdated;
  }

  deleteUserById(uuid: string): Promise<boolean> {
    const isUserDeleted: Promise<boolean> = this.userRepository.delete(uuid);
    return isUserDeleted;
  }

  findUserList(): Promise<User[]> {
    const userList: Promise<User[]> = this.userRepository.find();
    return userList;
  }

  userSignIn(email: string): Promise<User> {
    const userLogged: Promise<User> = this.userRepository.signIn(email);
    return userLogged;
  }
}
