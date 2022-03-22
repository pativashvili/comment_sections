import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Replys, User } from 'src/app/model';

@Component({
  selector: 'app-item-replys',
  templateUrl: './item-replys.component.html',
  styleUrls: ['./item-replys.component.scss'],
})
export class ItemReplysComponent implements OnInit {
  @Input() replyItem!: Replys;
  @Input() current_user!: User;

  @Output() replyIdOmitter: EventEmitter<number> = new EventEmitter<number>();
  replyInput = false;
  editing = false;

  @Output() onReplyToReplyHanlder: EventEmitter<{
    id: number;
    content: string;
  }> = new EventEmitter<{ id: number; content: string }>();

  constructor() {}

  remove_reply() {
    this.replyIdOmitter.emit(this.replyItem.id);
  }
  edit_reply() {
    this.editing = !this.editing;
  }
  handleUpdatedComment(comm: string) {
    this.replyItem.content = comm;
    this.editing = false;
  }

  handleReply() {
    this.onReplyToReplyHanlder.emit({
      content: this.replyItem.content,
      id: this.replyItem.id,
    });
  }
  ngOnInit(): void {}
}
