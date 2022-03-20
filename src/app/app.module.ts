import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommentShellComponent } from './components/comment-shell/comment-shell.component';
import { CommentItemComponent } from './components/comment-shell/comment-item/comment-item.component';
import { ItemReplysComponent } from './components/comment-shell/comment-item/item-replys/item-replys.component';
import { CurrentItemComponent } from './components/comment-shell/current-item/current-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentShellComponent,
    CommentItemComponent,
    ItemReplysComponent,
    CurrentItemComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
