import { TestBed } from '@angular/core/testing';

import { SaleCrudService } from './sale-crud.service';

describe('SaleCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaleCrudService = TestBed.get(SaleCrudService);
    expect(service).toBeTruthy();
  });
});
