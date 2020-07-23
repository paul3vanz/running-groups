import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCancelSessionBookingDialogComponent } from './confirm-cancel-session-booking-dialog.component';

describe('ConfirmCancelSessionBookingDialogComponent', () => {
  let component: ConfirmCancelSessionBookingDialogComponent;
  let fixture: ComponentFixture<ConfirmCancelSessionBookingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmCancelSessionBookingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmCancelSessionBookingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
