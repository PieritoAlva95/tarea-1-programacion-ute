import { Request, Response } from "express";
import { contactServiceFactory } from "../../../../core/dependecy_injection/service_factory";
import { ContactDeleter } from "../../application/use_cases/contact_deleter";
import { ContactService } from "../../domain/services/contact_service";

export const deleteContactController = async (req: Request, res: Response) => {
  try {
    const contactService: ContactService = contactServiceFactory();
    const contactDeleter = new ContactDeleter(contactService);
    const response = await contactDeleter.execute(req.params.id);
    if (!response) {
      res.status(404).json({
        status: "Fail",
        error_msg: "The user to be deleted does not exist!",
      });
      return;
    }
    res.status(200).json({
      status: "Succes",
      contact_deleted: response,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error_msg: error,
    });
  }
};
