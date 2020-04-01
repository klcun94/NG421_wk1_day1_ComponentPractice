import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { MessagePreviewComponent } from './message-preview/message-preview.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CommentsComponent } from './comments/comments.component';
import { TasksComponent } from './tasks/tasks.component';
import { OrdersComponent } from './orders/orders.component';
import { TicketsComponent } from './tickets/tickets.component';

@NgModule({
  declarations: [
    AppComponent,
    DateTimeComponent,
    MessagePreviewComponent,
    TaskItemComponent,
    TopNavComponent,
    SideNavComponent,
    CommentsComponent,
    TasksComponent,
    OrdersComponent,
    TicketsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
