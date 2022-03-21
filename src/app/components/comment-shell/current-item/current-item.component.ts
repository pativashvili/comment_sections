import { Component, Input, OnInit } from '@angular/core';
import { User, UsersComments } from 'src/app/model';

@Component({
  selector: 'app-current-item',
  templateUrl: './current-item.component.html',
  styleUrls: ['./current-item.component.scss'],
})
export class CurrentItemComponent implements OnInit {
  @Input() current_user!: User;
  @Input() users!: UsersComments[];
  // closed = false;
  // addComment() {
  //   this.closed = true;
  // }
  addComment(comm: string) {
    let new_user: UsersComments = {
      score: 0,
      id: 0,
      content: comm,
      user: this.current_user,
      replies: [],
      createdAt: '1min ago',
    };
    this.users.push(new_user);
  }
  constructor() {}

  ngOnInit(): void {}
}
