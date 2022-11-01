import { Request, Response } from "express";
import { contactServiceFactory } from "../../../../core/dependecy_injection/service_factory";
import { ContactSignIn } from "../../application/use_cases/contact_sign_in";
import { ContactService } from "../../domain/services/contact_service";
import bcrypt from "bcrypt";

declare module "express-session" {
  export interface SessionData {
    user: { [key: string]: any };
  }
}

export const signInContactController = async (req: Request, res: Response) => {
  try {
    const contactService: ContactService = contactServiceFactory();
    const contactSignIn: ContactSignIn = new ContactSignIn(contactService);
    const { email, password } = req.body;
    const response = await contactSignIn.execute(email);
    if (!response) {
      res.status(404).json({
        status: "Fail",
        error_msg: "The user does not exist!",
      });
      return;
    }
    const passwordMatch = await bcrypt.compare(password, response.password);
    if (!passwordMatch) {
      res.status(400).json({
        status: "Fail",
        error_msg: "Incorrect user or password!",
      });
      return;
    }
    req.session.user = response;
    res.status(200).json({
      status: "Succes",
      contact_logged: response,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error_msg: error,
    });
  }
};
