import { getRandomReply } from '../shared/randomMessages';
import { Message } from '../models/message.model';

export class MessageService {
  private messages: Message[] = [];

  getMessages(): Message[] {
      return this.messages;
    }

  addOpponentsMessage() {
    this.messages.push(new Message(Date.now(), 'John Doe', getRandomReply()));
  }

  addYoursMessage(text: string) {
    this.messages.push(new Message(Date.now(), 'You', text));
    setTimeout(this.addOpponentsMessage.bind(this), 1000)
  }


  deleteMessage(id: number) {
    this.messages.splice(id, 1);
  }

  deleteAllMessages() {
    console.log('asdasd');
    this.messages.splice(0);
  }
}

