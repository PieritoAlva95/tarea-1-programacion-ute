import { Request, Response } from "express";
import { contactServiceFactory } from "../../../../core/dependecy_injection/service_factory";
import { ContactCreator } from "../../application/use_cases/contact_creator";
import { ContactService } from "../../domain/services/contact_service";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env_vars } from "../../../../core/config/env_vars";

export const createContactController = async (req: Request, res: Response) => {
  try {
    const contactService: ContactService = contactServiceFactory();
    const contactCreator = new ContactCreator(contactService);
    const { names, lastNames, phoneNumber, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 12);
    const response = await contactCreator.execute({
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
    res.status(400).json({
      status: "Fail",
      error_msg: error,
    });
  }
};
