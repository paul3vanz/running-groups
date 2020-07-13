import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'running-groups-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: [ './calendar.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit {
  @Input() month = 'July';
  @Input() year = '2020';
  @Input() dates: string[];
  @Input() selectedDate: string;

  @Output() previousWeek = new EventEmitter();
  @Output() nextWeek = new EventEmitter();
  @Output() selectDate = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onPreviousWeek() {
    this.previousWeek.emit();
  }

  onNextWeek() {
    this.nextWeek.emit();
  }

  onSelectDate(date: string) {
    this.selectDate.emit(date);
  }
}
