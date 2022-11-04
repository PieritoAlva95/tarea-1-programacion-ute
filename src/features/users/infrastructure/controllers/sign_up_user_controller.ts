import { Request, Response } from "express";
import { userServiceFactory } from "../../../../core/dependecy_injection/service_factory";
import { UserCreator } from "../../application/use_cases/user_creator";
import { UserService } from "../../domain/services/user_service";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env_vars } from "../../../../core/config/env_vars";

export const signUpUserController = async (req: Request, res: Response) => {
  try {
    const userService: UserService = userServiceFactory();
    const userCreator = new UserCreator(userService);
    const { names, lastNames, phoneNumber, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 12);
    const response = await userCreator.execute({
      names,
      lastNames,
      phoneNumber,
      email,
      password: hashPassword,
    });
    const tokenCreated = jwt.sign({ response }, env_vars.TOKEN_SECRET!);
    res.status(200).json({
      status: "Succes",
      token: tokenCreated,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error_msg: error,
    });
  }
};
