import { UserService } from "../../features/users/domain/services/user_service";
import { MongoUserRepository } from "../../features/users/infrastructure/repository_implementation/mongo_user_repository";
import { NoteService } from "../../features/notes/domain/services/note_service";
import { MongoNoteRepository } from "../../features/notes/infrastructure/repository_implementation/mongo_note_repository";

export const userServiceFactory = (): UserService => {
  const userRepository = new MongoUserRepository();
  const userService = new UserService(userRepository);
  return userService;
};

export const noteServiceFactory = (): NoteService => {
  const mongoNoteRepository = new MongoNoteRepository();
  const noteService = new NoteService(mongoNoteRepository);
  return noteService;
};
