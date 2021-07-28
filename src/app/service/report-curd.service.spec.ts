import { TestBed } from '@angular/core/testing';

import { ReportCurdService } from './report-curd.service';

describe('ReportCurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportCurdService = TestBed.get(ReportCurdService);
    expect(service).toBeTruthy();
  });
});
