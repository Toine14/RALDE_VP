import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageMarkerInfosComponent } from './image-marker-infos.component';

describe('ImageMarkerInfosComponent', () => {
  let component: ImageMarkerInfosComponent;
  let fixture: ComponentFixture<ImageMarkerInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageMarkerInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageMarkerInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
