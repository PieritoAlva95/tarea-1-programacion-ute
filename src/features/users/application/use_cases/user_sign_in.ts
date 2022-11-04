import { User } from "../../domain/entities/user";
import { UserService } from "../../domain/services/user_service";

export class UserSignIn {
  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  public execute = async (email: string): Promise<User> => {
    return await this.userService.userSignIn(email);
  };
}
