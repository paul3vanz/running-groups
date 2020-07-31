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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private runsService: RunsService
  ) {
    this.createGroupForm = this.formBuilder.group({
      title: [`Paul's amazing group`, Validators.required],
      description: [''],
      paceFrom: ['08:30'],
      distance: ['6.2'],
      capacity: ['5'],
    });
  }

  ngOnInit(): void {}

  onSave(run: CreateRunInput) {
    this.runsService
      .createRun({
        ...run,
        organisationId: '7b681492-fef4-4243-9e41-ab7e03f95898',
        locationId: '4cc7ae2d-89f3-446e-889a-701a6f8df344',
        leaderId: 'a0b7d6a7-47f8-4360-a44b-ca76720eb467',
      })
      .pipe(take(1))
      .subscribe();
  }

  onCancel() {
    this.router.navigate(['/leader']);
  }
}
