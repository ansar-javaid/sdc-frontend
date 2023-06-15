import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatStepperModule} from '@angular/material/stepper';

import { ResumeStepperComponent } from './components/resume-stepper/resume-stepper.component';
import { PersonalComponent } from './components/stepper-components/personal/personal.component';
import { EducationComponent } from './components/stepper-components/education/education.component';
import { FormsModule } from '@angular/forms';
import { WorkComponent } from './components/stepper-components/work/work.component';
import { SkillsComponent } from './components/stepper-components/skills/skills.component';
import { CertificationComponent } from './components/stepper-components/certification/certification.component';
import { AwardsComponent } from './components/stepper-components/awards/awards.component';
import { ReferencesComponent } from './components/stepper-components/references/references.component';



@NgModule({
  declarations: [
    ResumeStepperComponent,
    PersonalComponent,
    EducationComponent,
    WorkComponent,
    SkillsComponent,
    CertificationComponent,
    AwardsComponent,
    ReferencesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatStepperModule,
  ]
})
export class BuildResumeModule { }
