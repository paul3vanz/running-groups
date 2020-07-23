import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOptionsDialogComponent } from './filter-options-dialog.component';

describe('FilterOptionsDialogComponent', () => {
  let component: FilterOptionsDialogComponent;
  let fixture: ComponentFixture<FilterOptionsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterOptionsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterOptionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
