import { Component, Input, OnInit } from '@angular/core';
import { Replys } from 'src/app/model';

@Component({
  selector: 'app-item-replys',
  templateUrl: './item-replys.component.html',
  styleUrls: ['./item-replys.component.scss'],
})
export class ItemReplysComponent implements OnInit {
  @Input() replyItem!: Replys;
  replyInput = false;
  toggleReply() {
    this.replyInput = !this.replyInput;
  }
  constructor() {}

  ngOnInit(): void {}
}
