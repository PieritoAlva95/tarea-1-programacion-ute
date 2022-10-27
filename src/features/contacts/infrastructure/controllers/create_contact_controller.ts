import { Request, Response } from "express";
import { contactServiceFactory } from "../../../../core/dependecy_injection/service_factory";
import { ContactCreator } from "../../application/use_cases/contact_creator";
import { ContactService } from "../../domain/services/contact_service";

export const createContactController = async (req: Request, res: Response) => {
  try {
    const contactService: ContactService = contactServiceFactory();
    const contactCreator = new ContactCreator(contactService);
    const response = await contactCreator.execute(req.body);
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
