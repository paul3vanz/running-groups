import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'running-groups-week-navigation',
  templateUrl: './week-navigation.component.html',
  styleUrls: [ './week-navigation.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeekNavigationComponent implements OnInit {
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
