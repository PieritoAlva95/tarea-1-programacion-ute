import { Request, Response } from "express";
import { contactServiceFactory } from "../../../../core/dependecy_injection/service_factory";
import { ContactCreator } from "../../application/contact_creator";
import { ContactService } from "../../domain/services/contact_service";

export const createContactController = async (req: any, res: Response) => {
  try {
    const contactService: ContactService = contactServiceFactory();
    const contactCreator: ContactCreator = new ContactCreator(contactService);
    const { names, lastNames, phoneNumber, email } = req.body;
    const response = await contactCreator.execute({
      userId: req.userId,
      names,
      lastNames,
      phoneNumber,
      email,
    });
    res.status(200).json({
      status: "Succes",
      contact_created: response,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error_msg: error,
    });
  }
};
