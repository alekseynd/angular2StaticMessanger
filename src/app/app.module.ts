import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MessageService } from './services/message.service';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header-component/header.component';
import { ChatScreenComponent } from './components/chat-screen-component/chat-screen.component';
import { AddMessageComponent } from './components/add-message-component/add-message.component';
import { ModalExportComponent } from './components/header-component/modals/modal-export/modal-export.component';
import { ModalDeleteAllComponent } from './components/header-component/modals/modal-delete-all/modal-delete-all.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatScreenComponent,
    AddMessageComponent,
    ModalExportComponent,
    ModalDeleteAllComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
