import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgTextBtnComponent } from './img-text-btn.component';

describe('ImgTextBtnComponent', () => {
  let component: ImgTextBtnComponent;
  let fixture: ComponentFixture<ImgTextBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgTextBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgTextBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
