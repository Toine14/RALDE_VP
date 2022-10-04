import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadAnswerComponent } from './bad-answer.component';

describe('BadAnswerComponent', () => {
  let component: BadAnswerComponent;
  let fixture: ComponentFixture<BadAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
