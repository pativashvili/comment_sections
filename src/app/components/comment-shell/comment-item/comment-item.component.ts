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
  isEditActive = false;
  toggleReply() {
    this.isReplayActive = !this.isReplayActive;
  }
  toggleEdit() {
    this.isEditActive = !this.isEditActive;
  }

  inputValue = '';

  constructor() {}
  removeComment() {
    this.mainCommentIdHandler.emit(this.commentItem.id);
  }
  ngOnInit(): void {}
  handleReplyId(id: number) {
    this.onReplayIdHandler.emit(id);
  }
  handleUpdate(comm: string) {
    this.commentItem.content = comm;
    this.isEditActive = false;
  }
  handleReplyForReply(item: { content: string; id: number }) {
    this.replyCommentIdHandler.emit({ content: item.content, id: item.id });
    this.toggleReply();
  }
  handleReply(inputValue: string) {
    this.onReplyHanlder.emit({ content: inputValue, id: this.commentItem.id });
    this.toggleReply();
  }
}
