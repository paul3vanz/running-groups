import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RunsService, CreateRunInput } from '@running-groups/api';
import { take } from 'rxjs/operators';

@Component({
  selector: 'running-groups-create-group-page',
  templateUrl: './create-group-page.component.html',
  styleUrls: ['./create-group-page.component.scss'],
})
export class CreateGroupPageComponent implements OnInit {
  createGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private runsService: RunsService) {
    this.createGroupForm = this.formBuilder.group({
      title: [`Paul's `, Validators.required],
      description: [''],
      paceFrom: ['08:30'],
      distance: ['6.2'],
      capacity: ['5'],
    });
  }

  ngOnInit(): void { }

  onSave(run: CreateRunInput) {
    this.runsService.createRun(run).pipe(take(1)).subscribe();
  }

  onCancel() {
    this.router.navigate(['/leader']);
  }
}
