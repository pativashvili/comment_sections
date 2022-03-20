import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model';

@Component({
  selector: 'app-current-item',
  templateUrl: './current-item.component.html',
  styleUrls: ['./current-item.component.scss'],
})
export class CurrentItemComponent implements OnInit {
  @Input() current_user!: User;
  constructor() {}

  ngOnInit(): void {}
}
