import { TestBed } from '@angular/core/testing';

import { SheetStorageService } from './sheet-storage.service';

describe('SheetStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SheetStorageService = TestBed.get(SheetStorageService);
    expect(service).toBeTruthy();
  });
});
