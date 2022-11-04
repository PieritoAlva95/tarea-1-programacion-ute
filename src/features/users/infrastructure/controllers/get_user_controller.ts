import { Request, Response } from "express";
import { userServiceFactory } from "../../../../core/dependecy_injection/service_factory";
import { UserGetter } from "../../application/use_cases/user_getter";
import { UserService } from "../../domain/services/user_service";

export const getUserController = async (req: Request, res: Response) => {
  try {
    const userService: UserService = userServiceFactory();
    const userGetter = new UserGetter(userService);
    const response = await userGetter.execute(req.params.id);
    if (!response) {
      res.status(404).json({
        status: "Fail",
        error_msg: "The user does not exist!",
      });
      return;
    }
    res.status(200).json({
      status: "Succes",
      user_finded: response,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error_msg: error,
    });
  }
};
