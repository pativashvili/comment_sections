import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User, UsersComments } from 'src/app/model';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
})
export class CommentItemComponent implements OnInit {
  @Input() commentItem!: UsersComments;
  @Input() current_user!: User;
  @Output() onReplyHanlder: EventEmitter<{ id: number; content: string }> =
    new EventEmitter<{ id: number; content: string }>();
  @Output() onReplayIdHandler: EventEmitter<number> = new EventEmitter();

  @Output() mainCommentIdHandler: EventEmitter<number> = new EventEmitter();

  @Output() replyCommentIdHandler: EventEmitter<{
    id: number;
    content: string;
  }> = new EventEmitter<{ id: number; content: string }>();

  isReplayActive = false;
  toggleReply() {
    this.isReplayActive = !this.isReplayActive;
  }
  inputValue = '';

  handleReplyId(id: number) {
    this.onReplayIdHandler.emit(id);
  }
  constructor() {}
  removeComment() {
    this.mainCommentIdHandler.emit(this.commentItem.id);
  }
  ngOnInit(): void {}

  handleReplyForReply(item: { content: string; id: number }) {
    this.replyCommentIdHandler.emit({ content: item.content, id: item.id });
    this.toggleReply();
  }
  handleReply(inputValue: string) {
    this.onReplyHanlder.emit({ content: inputValue, id: this.commentItem.id });
    this.toggleReply();
  }
}
