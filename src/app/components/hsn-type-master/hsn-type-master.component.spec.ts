import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsnTypeMasterComponent } from './hsn-type-master.component';

describe('HsnTypeMasterComponent', () => {
  let component: HsnTypeMasterComponent;
  let fixture: ComponentFixture<HsnTypeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsnTypeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsnTypeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
