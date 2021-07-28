import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRawMaterialsMasterComponent } from './purchase-raw-materials-master.component';

describe('PurchaseRawMaterialsMasterComponent', () => {
  let component: PurchaseRawMaterialsMasterComponent;
  let fixture: ComponentFixture<PurchaseRawMaterialsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRawMaterialsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRawMaterialsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
