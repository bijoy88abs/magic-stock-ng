import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsPurchaseComponent } from './reports-purchase.component';

describe('ReportsPurchaseComponent', () => {
  let component: ReportsPurchaseComponent;
  let fixture: ComponentFixture<ReportsPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
