import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model';

@Component({
  selector: 'app-reply-to-reply',
  templateUrl: './reply-to-reply.component.html',
  styleUrls: ['./reply-to-reply.component.scss'],
})
export class ReplyToReplyComponent implements OnInit {
  @Input() current_user: User | undefined;
  @Output() onReplyTo: EventEmitter<string> = new EventEmitter<string>();
  content = '';

  constructor() {}

  ngOnInit(): void {}

  reply() {
    if (this.content) {
      this.onReplyTo.emit(this.content);
    }
  }
}
