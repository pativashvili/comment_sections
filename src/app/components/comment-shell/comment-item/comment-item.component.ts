import { Component, Input, OnInit } from '@angular/core';
import { User, UsersComments } from 'src/app/model';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
})
export class CommentItemComponent implements OnInit {
  @Input() commentItem!: UsersComments;
  constructor() {}

  ngOnInit(): void {}
}
