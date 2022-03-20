import { Component } from '@angular/core';
import { CommentsService } from './comments.service';

@Component({
  providers: [CommentsService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'comment_sections';
  constructor(private commentService: CommentsService) {}
}
