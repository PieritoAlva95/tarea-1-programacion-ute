import { User } from "../../domain/entities/user";
import { UserService } from "../../domain/services/user_service";

export class UserListFinder {
  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  public execute = async (): Promise<User[]> => {
    return await this.userService.findUserList();
  };
}
