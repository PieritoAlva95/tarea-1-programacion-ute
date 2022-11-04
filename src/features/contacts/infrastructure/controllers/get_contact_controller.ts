import { Request, Response } from "express";
import { contactServiceFactory } from "../../../../core/dependecy_injection/service_factory";
import { ContactGetter } from "../../application/contact_getter";
import { ContactService } from "../../domain/services/contact_service";

export const getContactController = async (req: Request, res: Response) => {
  try {
    const contactService: ContactService = contactServiceFactory();
    const contactGetter: ContactGetter = new ContactGetter(contactService);
    const response = await contactGetter.execute(req.params.id);
    if (!response) {
      res.status(404).json({
        status: "Fail",
        error_msg: "The contact does not exist!",
      });
      return;
    }
    res.status(200).json({
      status: "Succes",
      contact_finded: response,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error_msg: error,
    });
  }
};
