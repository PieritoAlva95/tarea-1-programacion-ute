import { Request, Response } from "express";
import { contactServiceFactory } from "../../../../core/dependecy_injection/service_factory";
import { ContactUpdater } from "../../application/use_cases/contact_updater";
import { ContactService } from "../../domain/services/contact_service";

export const updateContactController = async (req: Request, res: Response) => {
  try {
    const contactService: ContactService = contactServiceFactory();
    const contactUpdater = new ContactUpdater(contactService);
    const response = await contactUpdater.execute(req.params.id, req.body);
    if (!response) {
      res.status(404).json({
        status: "Fail",
        error_msg: "The user to be updated does not exist!",
      });
      return;
    }
    res.status(200).json({
      status: "Succes",
      contact_updated: response,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error_msg: error,
    });
  }
};
