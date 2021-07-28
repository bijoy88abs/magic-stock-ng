import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRawMaterialsComponent } from './purchase-raw-materials.component';

describe('PurchaseRawMaterialsComponent', () => {
  let component: PurchaseRawMaterialsComponent;
  let fixture: ComponentFixture<PurchaseRawMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRawMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRawMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
