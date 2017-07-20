import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-add-message-component',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {

  messageText: string;
  constructor( private messageService: MessageService) { }

  ngOnInit() {
  }

  postMessage() {
    console.log(this.messageText);
    if (this.messageText.trim()) {
      this.messageService.addYoursMessage(this.messageText);
      this.messageText = '';
    }
  }

}
