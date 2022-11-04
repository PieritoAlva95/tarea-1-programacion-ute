import { User } from "../../domain/entities/user";
import { UserService } from "../../domain/services/user_service";

export class UserGetter {
  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  public execute = async (uuid: string): Promise<User | null> => {
    return await this.userService.getUserById(uuid);
  };
}
