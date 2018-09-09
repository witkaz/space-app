import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { PilotService } from '../pilot.service';
import { PilotValidators } from '../pilot-validators';

@Component({
  selector: 'app-pilot-form',
  templateUrl: './pilot-form.component.html',
  styleUrls: ['./pilot-form.component.css']
})
export class PilotFormComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private pilotService: PilotService,
              private router: Router) { }
  form: FormGroup;
  ngOnInit() {
    this.route.data.pipe(
      map((data) => new FormGroup({
        id: new FormControl(data.pilot.id),
        firstName: new FormControl(data.pilot.firstName, {
          validators: [Validators.required, PilotValidators.pilotName]
        }),
        lastName: new FormControl(data.pilot.lastName, {
          validators: [Validators.required],
          asyncValidators: [PilotValidators.pilotForbidden]
        }),
        imageUrl: new FormControl(data.pilot.imageUrl)
      }, {updateOn: 'blur'}))
    ).subscribe((form) => this.form = form);
  }
  save(): void {
    const pilotAttrs = this.form.value;
    this.pilotService.savePilot(pilotAttrs).subscribe(
      () => this.router.navigate(['../..'], {relativeTo: this.route}),
      () => alert('Nie udało się zapisać pilota!')
    );
  }
}
