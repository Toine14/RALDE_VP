import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalListComponent } from './practical-list.component';

describe('PracticalListComponent', () => {
  let component: PracticalListComponent;
  let fixture: ComponentFixture<PracticalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
