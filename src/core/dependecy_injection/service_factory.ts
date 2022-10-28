import { ContactService } from "../../features/contacts/domain/services/contact_service";
import { MongoContactRepository } from "../../features/contacts/infrastructure/repository_implementation/mongo_contact_repository";
import { NoteService } from "../../features/notes/domain/services/note_service";
import { MongoNoteRepository } from "../../features/notes/infrastructure/repository_implementation/mongo_note_repository";

export const contactServiceFactory = (): ContactService => {
  const contactRepository = new MongoContactRepository();
  const contactService = new ContactService(contactRepository);
  return contactService;
};

export const noteServiceFactory = (): NoteService => {
  const mongoNoteRepository = new MongoNoteRepository();
  const noteService = new NoteService(mongoNoteRepository);
  return noteService;
};
