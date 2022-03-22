import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/comments.service';
import { Replys, User, UsersComments } from 'src/app/model';

@Component({
  selector: 'app-comment-shell',
  templateUrl: './comment-shell.component.html',
  styleUrls: ['./comment-shell.component.scss'],
})
export class CommentShellComponent implements OnInit {
  currentUser!: User;
  comments!: UsersComments[];
  replies!: Replys[];
  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.commentsService.loadData().then((data) => {
      this.currentUser = data.currentUser;
      this.comments = data.comments;
    });
  }

  scoreChange() {
    /////dadas
    // commentsthis.
    // this.comments.sort((a, b) => b.score - a.score);
  }

  handleMainReply(data: any) {
    const mainComment = this.comments.find((c) => c.id == data.id);
    let newComment = {
      score: 0,
      id: this.generateMaxId(),
      content: data.content,
      user: this.currentUser,
      replyingTo: mainComment?.user.username || '',
      createdAt: new Date().getDate().toString(),
    };
    mainComment?.replies.push(newComment);
  }
  handleReplyForReply(data: any) {
    let mainReply = this.comments.filter((item) =>
      item.replies.find((c) => c.id == data.id)
    );
    let newReply = {
      score: 0,
      id: this.generateMaxId(),
      content: data.content,
      user: this.currentUser,
      replyingTo: '' || '',
      createdAt: new Date().getDate().toString(),
    };
    let newReplyToadd = mainReply.filter((item) => (item.id = newReply.id));
    this.replies.push(newReply);
  }
  handleReplyIdForDelete(id: number) {
    this.comments.forEach(
      (item) => (item.replies = item.replies.filter((reply) => reply.id !== id))
    );
  }
  generateMaxId() {
    let maxId = 1;
    this.comments.forEach((mainComment: any) => {
      if (mainComment.id > maxId) maxId = mainComment.id;
      mainComment.replies.forEach((reply: any) => {
        if (reply.id > maxId) maxId = reply.id;
      });
    });
    return ++maxId;
  }

  removeComment(id: number) {
    this.comments = this.comments.filter((item) => item.id != id);
  }
  handleMainComment(comment: string) {
    let newComment: UsersComments = {
      score: 0,
      id: this.generateMaxId(),
      content: comment,
      user: this.currentUser,
      replies: [],
      createdAt: new Date().getDate().toString(),
    };
    this.comments.push(newComment);
  }
}
