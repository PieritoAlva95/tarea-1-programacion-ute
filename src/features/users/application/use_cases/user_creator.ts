import { User } from "../../domain/entities/user";
import { UserService } from "../../domain/services/user_service";

export class UserCreator {
  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  public execute = async (user: User): Promise<User> => {
    return await this.userService.createUser(user);
  };
}
