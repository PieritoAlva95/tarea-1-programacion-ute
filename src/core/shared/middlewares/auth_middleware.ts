import { NextFunction, Request, Response } from "express";

export const protect = (req: Request, res: Response, next: NextFunction) => {
  const { user } = req.session;

  if (!user) {
    res.status(401).json({
      status: "Fail",
      error_msg: "You are not authorized!",
    });
    return;
  }

  next();
};
