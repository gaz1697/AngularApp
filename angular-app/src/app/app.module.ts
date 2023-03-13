import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { MenuComponent } from './menu/menu.component';
import { WarningMessageComponent } from './warning-message/warning-message.component';
import { successMessage } from './successMessage/successMessage.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    MenuComponent,
    WarningMessageComponent,
    successMessage
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
