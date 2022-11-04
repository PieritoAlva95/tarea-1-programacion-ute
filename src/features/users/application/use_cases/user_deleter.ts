import { UserService } from "../../domain/services/user_service";

export class UserDeleter {
  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  public execute = async (uuid: string): Promise<boolean> => {
    return await this.userService.deleteUserById(uuid);
  };
}
