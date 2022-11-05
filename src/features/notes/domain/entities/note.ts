interface NoteEntity {
  userId: string;
  title: string;
  body: string;
}

export class Note implements NoteEntity {
  userId: string;
  title: string;
  body: string;

  constructor({ userId, title, body }: NoteEntity) {
    this.userId = userId;
    this.title = title;
    this.body = body;
  }
}
