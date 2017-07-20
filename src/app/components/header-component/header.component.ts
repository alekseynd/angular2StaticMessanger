import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showExportDataModal = false;
  showDeleteAllMessagesModal = false;
  constructor(private messageService: MessageService) {}

  ngOnInit() {
  }

  exportData() {
    this.showExportDataModal = true;
    this.showDeleteAllMessagesModal = false;
  }

  deleteAllMessages() {
    this.showDeleteAllMessagesModal = true;
    this.showExportDataModal = false;
  }
}
