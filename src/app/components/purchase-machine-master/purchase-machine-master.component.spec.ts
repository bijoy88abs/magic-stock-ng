import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseMachineMasterComponent } from './purchase-machine-master.component';

describe('PurchaseMachineMasterComponent', () => {
  let component: PurchaseMachineMasterComponent;
  let fixture: ComponentFixture<PurchaseMachineMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseMachineMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseMachineMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
