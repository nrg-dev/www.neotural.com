import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryLoginComponent } from './enquiry-login.component';

describe('EnquiryLoginComponent', () => {
  let component: EnquiryLoginComponent;
  let fixture: ComponentFixture<EnquiryLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquiryLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquiryLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
