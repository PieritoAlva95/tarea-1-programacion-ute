import { UserService } from "../../features/users/domain/services/user_service";
import { MongoUserRepository } from "../../features/users/infrastructure/repository_implementation/mongo_user_repository";
import { NoteService } from "../../features/notes/domain/services/note_service";
import { MongoNoteRepository } from "../../features/notes/infrastructure/repository_implementation/mongo_note_repository";
import { ContactService } from "../../features/contacts/domain/services/contact_service";
import { MongoContactRepository } from "../../features/contacts/infrastructure/repository_implementation/mongo_contact_repository";

export const userServiceFactory = (): UserService => {
  const mongoUserRepository = new MongoUserRepository();
  const userService = new UserService(mongoUserRepository);
  return userService;
};

export const contactServiceFactory = (): ContactService => {
  const mongoContactRepository = new MongoContactRepository();
  const contactService = new ContactService(mongoContactRepository);
  return contactService;
};

export const noteServiceFactory = (): NoteService => {
  const mongoNoteRepository = new MongoNoteRepository();
  const noteService = new NoteService(mongoNoteRepository);
  return noteService;
};
