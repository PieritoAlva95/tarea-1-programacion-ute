interface NoteEntitty {
  contactId: string;
  title: string;
  body: string;
}

export class Note implements NoteEntitty {
  contactId: string;
  title: string;
  body: string;

  constructor({ contactId, title, body }: NoteEntitty) {
    this.contactId = contactId;
    this.title = title;
    this.body = body;
  }
}
