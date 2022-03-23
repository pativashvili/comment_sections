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
    // commentsthis.
    // this.comments.sort((a, b) => b.score - a.score);
  }

  onReplyUpdateHanlder(data: { replyId: number; content: string }) {
    this.comments.forEach((c) => {
      c.replies.forEach((rep) => {
        if (rep.id == data.replyId) {
          rep.content = data.content;
        }
      });
    });
  }
  removeComment(id: number) {
    this.comments = this.comments.filter((item) => item.id != id);
  }

  handleMainReply(data: {
    id: number | undefined;
    content: string | undefined;
  }) {
    const mainComment = this.comments.find((c) => c.id == data.id);
    const newComment: Replys = {
      score: 0,
      id: this.generateMaxId(),
      content: data.content,
      user: this.currentUser,
      replyingTo: mainComment?.user.username || '',
      createdAt: new Date().getDate().toString(),
    };
    mainComment?.replies.push(newComment);
  }
  handleReplyForReply(data: {
    id: number | undefined;
    content: string | undefined;
  }) {
    const mainReply: UsersComments[] = this.comments.filter((item) =>
      item.replies.find((c) => c.id == data.id)
    );
    const newReply = {
      score: 0,
      id: this.generateMaxId(),
      content: data.content,
      user: this.currentUser,
      replyingTo: '' || '',
      createdAt: new Date().getDate().toString(),
    };
    mainReply[0].replies.push(newReply);
  }

  handleReplyIdForDelete(id: number) {
    this.comments.forEach(
      (item) => (item.replies = item.replies.filter((reply) => reply.id !== id))
    );
  }
  handleMainCommentUpdate(data: { id: number; content: string }) {
    this.comments.forEach((c) => {
      if (c.id == data.id) {
        c.content = data.content;
      }
    });
  }

  generateMaxId() {
    let maxId = 1;
    this.comments.forEach((mainComment: UsersComments) => {
      if (mainComment.id > maxId) maxId = mainComment.id;
      mainComment.replies.forEach((reply: Replys) => {
        if (reply.id > maxId) maxId = reply.id;
      });
    });
    return ++maxId;
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
