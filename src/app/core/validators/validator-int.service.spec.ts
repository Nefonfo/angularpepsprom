import { TestBed } from '@angular/core/testing';

import { ValidatorIntService } from './validator-int.service';

describe('ValidatorIntService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidatorIntService = TestBed.get(ValidatorIntService);
    expect(service).toBeTruthy();
  });
});
