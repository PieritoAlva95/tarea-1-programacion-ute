import { Response } from "express";
import { contactServiceFactory } from "../../../../core/dependecy_injection/service_factory";
import { ContactFinderByUserId } from "../../application/contact_finder_by_user_id";
import { ContactService } from "../../domain/services/contact_service";

export const findContactsByUserIdController = async (
  req: any,
  res: Response
) => {
  try {
    const contactService: ContactService = contactServiceFactory();
    const contactFinderByUserId: ContactFinderByUserId =
      new ContactFinderByUserId(contactService);
    const userId = req.userId;
    const response = await contactFinderByUserId.execute(userId);
    if (response.length === 0) {
      res.status(404).json({
        status: "Fail",
        error_msg: "There are no contacts recorded!",
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
