import { NextFunction, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { env_vars } from "../../config/env_vars";

export const protect = (req: any, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    res.status(401).json({
      status: "Fail",
      error_msg: "You are not authorized!",
    });
    return;
  }
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    res.status(401).json({
      status: "Fail",
      error_msg: "You are not authorized!",
    });
    return;
  }
  const data = jwt.verify(token, env_vars.TOKEN_SECRET!) as JwtPayload;
  if (!data) {
    res.status(401).json({
      status: "Fail",
      error_msg: "You are not authorized!",
    });
    return;
  }
  next();
};
