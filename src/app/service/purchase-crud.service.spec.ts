import { TestBed } from '@angular/core/testing';

import { PurchaseCrudService } from './purchase-crud.service';

describe('PurchaseCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PurchaseCrudService = TestBed.get(PurchaseCrudService);
    expect(service).toBeTruthy();
  });
});
