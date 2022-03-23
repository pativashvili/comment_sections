import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommentShellComponent } from './components/comment-shell/comment-shell.component';
import { CommentItemComponent } from './components/comment-shell/comment-item/comment-item.component';
import { ItemReplysComponent } from './components/comment-shell/comment-item/item-replys/item-replys.component';
import { CurrentItemComponent } from './components/comment-shell/current-item/current-item.component';
import { NewReplyComponent } from './components/new-reply/new-reply.component';
import { FormsModule } from '@angular/forms';
import { ReplyEditComponent } from './components/comment-shell/comment-item/item-replys/reply-edit/reply-edit.component';
import { ReplyToReplyComponent } from './components/reply-to-reply/reply-to-reply.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentShellComponent,
    CommentItemComponent,
    ItemReplysComponent,
    CurrentItemComponent,
    NewReplyComponent,
    ReplyEditComponent,
    ReplyToReplyComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
