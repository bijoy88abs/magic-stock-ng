import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseItemMasterComponent } from './purchase-item-master.component';

describe('PurchaseItemMasterComponent', () => {
  let component: PurchaseItemMasterComponent;
  let fixture: ComponentFixture<PurchaseItemMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseItemMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseItemMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
