import { User } from "../../domain/entities/user";
import { UserService } from "../../domain/services/user_service";

export class UserUpdater {
  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  public execute = async (uuid: string, user: User): Promise<User | null> => {
    return await this.userService.updateUserById(uuid, user);
  };
}
