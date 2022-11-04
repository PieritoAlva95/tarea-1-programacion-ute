import { Request, Response } from "express";
import { userServiceFactory } from "../../../../core/dependecy_injection/service_factory";
import { UserListFinder } from "../../application/use_cases/user_list_finder";
import { UserService } from "../../domain/services/user_service";

export const findUserListController = async (_: Request, res: Response) => {
  try {
    const userService: UserService = userServiceFactory();
    const userListFinder: UserListFinder = new UserListFinder(userService);
    const response = await userListFinder.execute();
    if (response.length === 0) {
      res.status(404).json({
        status: "Fail",
        error_msg: "There is no registered user!",
      });
      return;
    }
    res.status(200).json({
      status: "Succes",
      list_length: response.length,
      user_list_finded: response,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error_msg: error,
    });
  }
};
