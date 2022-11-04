import { Request, Response } from "express";
import { userServiceFactory } from "../../../../core/dependecy_injection/service_factory";
import { UserUpdater } from "../../application/use_cases/user_updater";
import { UserService } from "../../domain/services/user_service";

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const userService: UserService = userServiceFactory();
    const userUpdater = new UserUpdater(userService);
    const response = await userUpdater.execute(req.params.id, req.body);
    if (!response) {
      res.status(404).json({
        status: "Fail",
        error_msg: "The user to be updated does not exist!",
      });
      return;
    }
    res.status(200).json({
      status: "Succes",
      user_updated: response,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error_msg: error,
    });
  }
};
