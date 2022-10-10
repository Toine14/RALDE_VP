import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuPresentationComponent } from './sub-menu-presentation.component';

describe('SubMenuPresentationComponent', () => {
  let component: SubMenuPresentationComponent;
  let fixture: ComponentFixture<SubMenuPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubMenuPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
