import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/comments.service';
import { User, UsersComments } from 'src/app/model';
@Component({
  selector: 'app-comment-shell',
  templateUrl: './comment-shell.component.html',
  styleUrls: ['./comment-shell.component.scss'],
})
export class CommentShellComponent implements OnInit {
  currentUser!: User;
  comments!: UsersComments[];
  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.commentsService.loadData().then((data) => {
      this.currentUser = data.currentUser;
      this.comments = data.comments;
    });
  }
}
