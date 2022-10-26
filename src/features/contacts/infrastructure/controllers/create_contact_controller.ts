import { Request, Response } from "express";
import { contactServiceFactory } from "../../../../core/dependecy_injection/service_factory";
import { ContactCreator } from "../../application/use_cases/contact_creator";
import { ContactService } from "../../domain/services/contact_service";

export const createContactController = async (req: Request, res: Response) => {
  const contactService: ContactService = contactServiceFactory();
  const contactCreator = new ContactCreator(contactService);
  const response = await contactCreator.execute(req.body);
  res.send(response);
};
