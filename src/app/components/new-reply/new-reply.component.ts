import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommentsService } from 'src/app/comments.service';
import { User, UsersComments } from 'src/app/model';

@Component({
  selector: 'app-new-reply',
  templateUrl: './new-reply.component.html',
  styleUrls: ['./new-reply.component.scss'],
})
export class NewReplyComponent implements OnInit {
  @Output() onReply: EventEmitter<string> = new EventEmitter<string>();

  users!: UsersComments[];
  current_user!: User;
  not_replied: boolean = true;
  replied: boolean = !this.not_replied;
  reply_inputed_value = '';

  reply() {
    if (this.reply_inputed_value) {
      this.onReply.emit(this.reply_inputed_value);
    }
  }

  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.commentsService.loadData().then((data) => {
      this.users = data.comments;
      this.current_user = data.currentUser;
    });
  }
}
