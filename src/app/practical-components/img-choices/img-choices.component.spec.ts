import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgChoicesComponent } from './img-choices.component';

describe('ImgChoicesComponent', () => {
  let component: ImgChoicesComponent;
  let fixture: ComponentFixture<ImgChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgChoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
