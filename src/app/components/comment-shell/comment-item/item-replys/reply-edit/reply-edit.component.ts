import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reply-edit',
  templateUrl: './reply-edit.component.html',
  styleUrls: ['./reply-edit.component.scss'],
})
export class ReplyEditComponent implements OnInit {
  @Input() commentContent: string | undefined;
  @Output() replyContentUpdate: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  updateReply(comm: string | undefined) {
    this.replyContentUpdate.emit(comm);
  }
}
