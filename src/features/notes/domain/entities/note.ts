interface NoteEntity {
  contactId: string;
  title: string;
  body: string;
}

export class Note implements NoteEntity {
  contactId: string;
  title: string;
  body: string;

  constructor({ contactId, title, body }: NoteEntity) {
    this.contactId = contactId;
    this.title = title;
    this.body = body;
  }
}
