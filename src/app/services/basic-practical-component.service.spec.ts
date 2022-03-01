import { TestBed } from '@angular/core/testing';

import { BasicPracticalComponentService } from './basic-practical-component.service';

describe('BasicPracticalComponentService', () => {
  let service: BasicPracticalComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicPracticalComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
