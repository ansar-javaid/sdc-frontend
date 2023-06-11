import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatStepperModule} from '@angular/material/stepper';

import { ResumeStepperComponent } from './components/resume-stepper/resume-stepper.component';
import { PersonalComponent } from './components/stepper-components/personal/personal.component';
import { EducationComponent } from './components/stepper-components/education/education.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ResumeStepperComponent,
    PersonalComponent,
    EducationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatStepperModule,
  ]
})
export class BuildResumeModule { }
