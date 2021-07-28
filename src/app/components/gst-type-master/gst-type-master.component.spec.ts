import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GstTypeMasterComponent } from './gst-type-master.component';

describe('GstTypeMasterComponent', () => {
  let component: GstTypeMasterComponent;
  let fixture: ComponentFixture<GstTypeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstTypeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GstTypeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
