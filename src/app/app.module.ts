import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { MessagePreviewComponent } from './message-preview/message-preview.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    DateTimeComponent,
    MessagePreviewComponent,
    TaskItemComponent,
    TopNavComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
