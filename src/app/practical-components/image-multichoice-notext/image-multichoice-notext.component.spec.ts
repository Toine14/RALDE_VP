import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageMultichoiceNotextComponent } from './image-multichoice-notext.component';

describe('ImageMultichoiceNotextComponent', () => {
  let component: ImageMultichoiceNotextComponent;
  let fixture: ComponentFixture<ImageMultichoiceNotextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageMultichoiceNotextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageMultichoiceNotextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
