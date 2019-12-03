import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContentComponent } from './content/content.component';
import { ModalBodyComponent } from './modal-body/modal-body.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SidenavComponent,
    ContentComponent,
    ModalBodyComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
