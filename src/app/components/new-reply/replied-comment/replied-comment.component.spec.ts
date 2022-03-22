import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepliedCommentComponent } from './replied-comment.component';

describe('RepliedCommentComponent', () => {
  let component: RepliedCommentComponent;
  let fixture: ComponentFixture<RepliedCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepliedCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepliedCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
