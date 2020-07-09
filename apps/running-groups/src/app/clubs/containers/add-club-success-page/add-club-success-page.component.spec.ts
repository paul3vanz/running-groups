import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClubSuccessPageComponent } from './add-club-success-page.component';

describe('AddClubSuccessPageComponent', () => {
  let component: AddClubSuccessPageComponent;
  let fixture: ComponentFixture<AddClubSuccessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClubSuccessPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClubSuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
