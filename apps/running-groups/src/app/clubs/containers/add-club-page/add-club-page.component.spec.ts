import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClubPageComponent } from './add-club-page.component';

describe('AddClubPageComponent', () => {
  let component: AddClubPageComponent;
  let fixture: ComponentFixture<AddClubPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClubPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
