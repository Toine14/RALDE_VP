import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalsGeneratorComponent } from './practicals-generator.component';

describe('PracticalsGeneratorComponent', () => {
  let component: PracticalsGeneratorComponent;
  let fixture: ComponentFixture<PracticalsGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticalsGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticalsGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
