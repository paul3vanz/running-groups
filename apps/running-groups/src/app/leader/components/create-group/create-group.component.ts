import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CreateRunInput } from '@running-groups/api';

@Component({
  selector: 'running-groups-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {
  @Input() formGroup: FormGroup;

  @Output() save = new EventEmitter<CreateRunInput>();
  @Output() cancel = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onCancel() {
    this.cancel.emit();
  }

  onSave() {
    this.save.emit(this.formGroup.value);
  }

}
