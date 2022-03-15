import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageMarkerChoiceComponent } from './image-marker-choice.component';

describe('ImageMarkerChoiceComponent', () => {
  let component: ImageMarkerChoiceComponent;
  let fixture: ComponentFixture<ImageMarkerChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageMarkerChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageMarkerChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
