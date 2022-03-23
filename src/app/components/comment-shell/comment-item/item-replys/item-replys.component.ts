import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Replys, User } from 'src/app/model';

@Component({
  selector: 'app-item-replys',
  templateUrl: './item-replys.component.html',
  styleUrls: ['./item-replys.component.scss'],
})
export class ItemReplysComponent implements OnInit {
  @Input() replyItem: Replys | undefined;
  @Input() current_user: User | undefined;
  @Output() replyIdOmitter: EventEmitter<number> = new EventEmitter<number>();
  @Output() onReplyToReplyHanlder: EventEmitter<{
    id: number | undefined;
    content: string;
  }> = new EventEmitter<{ id: number | undefined; content: string }>();
  @Output() onReplyUpdateEvent: EventEmitter<{
    replyId: number | undefined;
    content: string | undefined;
  }> = new EventEmitter<{
    replyId: number | undefined;
    content: string | undefined;
  }>();

  isReplyTo = false;
  replyInput = false;
  editing = false;

  constructor() {}

  ngOnInit(): void {}

  remove_reply() {
    this.replyIdOmitter.emit(this.replyItem?.id);
  }
  edit_reply() {
    this.editing = !this.editing;
  }
  handleUpdatedComment(comm: string) {
    this.onReplyUpdateEvent.emit({
      replyId: this.replyItem?.id,
      content: comm,
    });
    // this.replyItem.content = comm;
    this.editing = false;
  }

  handleReply(replyContent: string) {
    this.onReplyToReplyHanlder.emit({
      content: replyContent,
      id: this.replyItem?.id,
    });
    this.toggletoReply();
  }

  toggletoReply() {
    this.isReplyTo = !this.isReplyTo;
  }
}
