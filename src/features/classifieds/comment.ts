export class Comment {
  id: string;
  content: string;
  createdAt: string;

  constructor(content: string) {
    this.id = "1";
    this.content = content;
    this.createdAt = new Date().toISOString();
  }
}
