import { Request, Response } from "express";
import { userServiceFactory } from "../../../../core/dependecy_injection/service_factory";
import { UserDeleter } from "../../application/use_cases/user_deleter";
import { UserService } from "../../domain/services/user_service";

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const userService: UserService = userServiceFactory();
    const userDeleter = new UserDeleter(userService);
    const response = await userDeleter.execute(req.params.id);
    if (!response) {
      res.status(404).json({
        status: "Fail",
        error_msg: "The user to be deleted does not exist!",
      });
      return;
    }
    res.status(200).json({
      status: "Succes",
      user_deleted: response,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error_msg: error,
    });
  }
};
