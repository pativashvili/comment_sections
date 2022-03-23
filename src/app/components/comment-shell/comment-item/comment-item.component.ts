import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User, UsersComments } from 'src/app/model';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
})
export class CommentItemComponent implements OnInit {
  @Input() commentItem: UsersComments | undefined;
  @Input() current_user: User | undefined;
  @Output() onReplyHanlder: EventEmitter<{
    id: number | undefined;
    content: string | undefined;
  }> = new EventEmitter<{
    id: number | undefined;
    content: string | undefined;
  }>();
  @Output() onReplayIdHandler: EventEmitter<number> = new EventEmitter();
  @Output() mainCommentIdHandler: EventEmitter<number> = new EventEmitter();
  @Output() replyCommentIdHandler: EventEmitter<{
    id: number | undefined;
    content: string | undefined;
  }> = new EventEmitter<{
    id: number | undefined;
    content: string | undefined;
  }>();
  @Output() onMainCommentUpdate: EventEmitter<any> = new EventEmitter<any>();
  @Output() onReplyUpdate: EventEmitter<any> = new EventEmitter<any>();
  isReplayActive = false;
  isEditActive = false;
  inputValue = '';

  constructor() {}

  ngOnInit(): void {}

  removeComment() {
    this.mainCommentIdHandler.emit(this.commentItem?.id);
  }
  handleReplyId(id: number) {
    this.onReplayIdHandler.emit(id);
  }
  toggleReply() {
    this.isReplayActive = !this.isReplayActive;
  }
  toggleEdit() {
    this.isEditActive = !this.isEditActive;
  }
  handleUpdate(comm: string) {
    this.onMainCommentUpdate.emit({ id: this.commentItem?.id, content: comm });
    this.isEditActive = false;
  }
  handleReplyForReply(item: {
    content: string | undefined;
    id: number | undefined;
  }) {
    this.replyCommentIdHandler.emit({ content: item.content, id: item.id });
  }

  handleReply(inputValue: string) {
    this.onReplyHanlder.emit({ content: inputValue, id: this.commentItem?.id });
    this.toggleReply();
  }

  handleOnReplyUpdateEmitter(data: any) {
    this.onReplyUpdate.emit(data);
  }
}
