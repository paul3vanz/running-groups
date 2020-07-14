import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekNavigationComponent } from './week-navigation.component';

describe('CalendarComponent', () => {
  let component: WeekNavigationComponent;
  let fixture: ComponentFixture<WeekNavigationComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ WeekNavigationComponent ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
