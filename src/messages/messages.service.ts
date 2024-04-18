import { MessagesRepository } from './messages.repository';

export class MessagesService {
  private messagesRepo: MessagesRepository;
  constructor() {
    // TODO: Change to use dependency injection
    this.messagesRepo = new MessagesRepository();
  }
  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  async findAll() {
    return this.messagesRepo.findAll();
  }

  async create(content: string) {
    return this.messagesRepo.create(content);
  }
}
