import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseMachineComponent } from './purchase-machine.component';

describe('PurchaseMachineComponent', () => {
  let component: PurchaseMachineComponent;
  let fixture: ComponentFixture<PurchaseMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
