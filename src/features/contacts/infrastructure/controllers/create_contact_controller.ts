import { Request, Response } from "express";
import { contactServiceFactory } from "../../../../core/dependecy_injection/service_factory";
import { ContactCreator } from "../../application/use_cases/contact_creator";
import { ContactService } from "../../domain/services/contact_service";
import bcrypt from "bcrypt";

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
    req.session.user = response;
    res.status(200).json({
      status: "Succes",
      contact_created: response,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error_msg: error,
    });
  }
};
