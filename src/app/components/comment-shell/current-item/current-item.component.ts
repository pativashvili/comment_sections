import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User, UsersComments } from 'src/app/model';

@Component({
  selector: 'app-current-item',
  templateUrl: './current-item.component.html',
  styleUrls: ['./current-item.component.scss'],
})
export class CurrentItemComponent implements OnInit {
  @Input() current_user: User | undefined;
  @Output() onMainComment: EventEmitter<string> = new EventEmitter<string>();
  content: string = '';

  constructor() {}

  ngOnInit(): void {}

  addComment() {
    if (this.content) {
      this.onMainComment.emit(this.content);
    }
    this.content = '';
  }
}
