import { Request, Response } from "express";
import { contactServiceFactory } from "../../../../core/dependecy_injection/service_factory";
import { ContactListFinder } from "../../application/contact_list_finder";
import { ContactService } from "../../domain/services/contact_service";

export const findContactListController = async (_: Request, res: Response) => {
  try {
    const contactService: ContactService = contactServiceFactory();
    const contactListFinder = new ContactListFinder(contactService);
    const response = await contactListFinder.execute();
    if (response.length === 0) {
      res.status(404).json({
        status: "Fail",
        error_msg: "There is no registered contact!",
      });
      return;
    }
    res.status(200).json({
      status: "Succes",
      list_length: response.length,
      contact_list_finded: response,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error_msg: error,
    });
  }
};
