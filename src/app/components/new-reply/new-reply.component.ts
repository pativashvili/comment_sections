import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommentsService } from 'src/app/comments.service';
import { User } from 'src/app/model';

@Component({
  selector: 'app-new-reply',
  templateUrl: './new-reply.component.html',
  styleUrls: ['./new-reply.component.scss'],
})
export class NewReplyComponent implements OnInit {
  currentUser!: User;

  not_replied: boolean = true;
  replied: boolean = !this.not_replied;

  getContent() {
    this.replied = true;
  }

  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {}
}
