import { Request, Response } from "express";
import { contactServiceFactory } from "../../../../core/dependecy_injection/service_factory";
import { ContactGetter } from "../../application/use_cases/contact_getter";
import { ContactService } from "../../domain/services/contact_service";

export const getContactController = async (req: Request, res: Response) => {
  try {
    const contactService: ContactService = contactServiceFactory();
    const contactGetter = new ContactGetter(contactService);
    const response = await contactGetter.execute(req.params.id);
    if (!response) {
      res.status(404).json({
        status: "Fail",
        error_msg: "The user does not exist!",
      });
      return;
    }
    res.status(200).json({
      status: "Succes",
      contact_finded: response,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error_msg: error,
    });
  }
};
