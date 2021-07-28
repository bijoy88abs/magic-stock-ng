import { TestBed } from '@angular/core/testing';

import { MasterCrudService } from './master-crud.service';

describe('MasterCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterCrudService = TestBed.get(MasterCrudService);
    expect(service).toBeTruthy();
  });
});
