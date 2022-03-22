import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Replys } from 'src/app/model';

@Component({
  selector: 'app-reply-edit',
  templateUrl: './reply-edit.component.html',
  styleUrls: ['./reply-edit.component.scss'],
})
export class ReplyEditComponent implements OnInit {
  @Input() replyContent!: Replys['content'];
  @Output() replyContentUpdate: EventEmitter<string> = new EventEmitter();
  constructor() {}
  updateReply(comm: string) {
    this.replyContent = comm;
    this.replyContentUpdate.emit(this.replyContent);
    console.log(this.replyContent);
  }
  ngOnInit(): void {}
}
