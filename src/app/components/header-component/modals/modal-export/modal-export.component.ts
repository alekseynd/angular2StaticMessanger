import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-modal-export',
  templateUrl: './modal-export.component.html',
  styleUrls: ['./modal-export.component.css']
})
export class ModalExportComponent implements OnInit {

  @Input() showModal: boolean;
  @Output() showModalChange = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.showModal = false;
    this.showModalChange.emit(this.showModal);
  }
}
