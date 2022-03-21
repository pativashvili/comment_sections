import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommentsService } from 'src/app/comments.service';
import { User, UsersComments } from 'src/app/model';

@Component({
  selector: 'app-new-reply',
  templateUrl: './new-reply.component.html',
  styleUrls: ['./new-reply.component.scss'],
})
export class NewReplyComponent implements OnInit {
  users!: UsersComments[];
  current_user!: User;
  test: FormsModule = '';
  not_replied: boolean = true;
  replied: boolean = !this.not_replied;
  reply_inputed_value = '';
  getContent() {
    this.replied = false;
    this.not_replied = false;
    let new_user = {
      score: 0,
      id: 0,
      content: this.reply_inputed_value,
      user: this.current_user,
      replyingTo: 'someone',
      createdAt: '1min ago',
    };
    this.users.forEach((element) => {
      element.replies.push(new_user);
    });
  }

  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.commentsService.loadData().then((data) => {
      this.users = data.comments;
      this.current_user = data.currentUser;
    });
  }
}
