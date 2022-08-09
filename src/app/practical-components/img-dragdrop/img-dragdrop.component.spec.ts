import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgDragdropComponent } from './img-dragdrop.component';

describe('ImgDragdropComponent', () => {
  let component: ImgDragdropComponent;
  let fixture: ComponentFixture<ImgDragdropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgDragdropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgDragdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
