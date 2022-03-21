import { Component, Input, OnInit } from '@angular/core';
import { User, UsersComments } from 'src/app/model';

@Component({
  selector: 'app-replied-comment',
  templateUrl: './replied-comment.component.html',
  styleUrls: ['./replied-comment.component.scss'],
})
export class RepliedCommentComponent implements OnInit {
  @Input() value!: string;
  @Input() reply_users!: UsersComments[];
  @Input() current_user!: User;
  constructor() {}

  ngOnInit(): void {}
}
