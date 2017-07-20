import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.css']
})
export class ChatScreenComponent implements OnInit {
  messages: Message[];

  constructor( private messageService: MessageService) { }

  ngOnInit() {
    this.messages = this.messageService.getMessages();
  }

  deleteMessage(id: number) {
    this.messageService.deleteMessage(id);
  }


}
