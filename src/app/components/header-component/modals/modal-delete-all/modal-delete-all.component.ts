import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessageService } from '../../../../services/message.service';

@Component({
  selector: 'app-modal-delete-all',
  templateUrl: './modal-delete-all.component.html',
  styleUrls: ['./modal-delete-all.component.css']
})
export class ModalDeleteAllComponent implements OnInit {
  @Input() showModal: boolean;
  @Output() showModalChange = new EventEmitter<boolean>();

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  closeModal() {
    this.showModal = false;
    this.showModalChange.emit(this.showModal);
  }

  deleteAllMessages() {
    this.messageService.deleteAllMessages();
    this.closeModal()
  }

}
