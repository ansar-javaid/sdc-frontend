import { Component } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-resume-stepper',
  templateUrl: './resume-stepper.component.html',
  styleUrls: ['./resume-stepper.component.scss']
})
export class ResumeStepperComponent {

  stepperOrientation: Observable<StepperOrientation>;

  constructor(breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
}
