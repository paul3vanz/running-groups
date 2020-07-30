import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { User } from '@running-groups/auth';

@Component({
  selector: 'running-groups-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit {
  @Input() dates: any;
  @Input() hasFilters: boolean;
  @Input() loading: boolean;
  @Input() selectedDate: string;
  @Input() sessions: any;
  @Input() user: User;

  @Output() bookSession = new EventEmitter<string>();
  @Output() cancelSession = new EventEmitter<string>();
  @Output() filterClick = new EventEmitter<void>();
  @Output() selectDate = new EventEmitter<string>();
  @Output() shiftDays = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void { }

  onBookSession(sessionId: string) {
    this.bookSession.emit(sessionId);
  }

  onCancelSession(sessionId: string) {
    this.cancelSession.emit(sessionId);
  }

  onFilterClick() {
    this.filterClick.emit();
  }

  onSelectDate(date: string) {
    this.selectDate.emit();
  }

  onShiftDays(days: number) {
    this.shiftDays.emit();
  }
}
