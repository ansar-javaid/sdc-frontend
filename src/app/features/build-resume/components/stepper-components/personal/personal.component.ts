import { Component, Input } from '@angular/core';
import { IPersonal } from '../../../../models/resume.model';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {
  @Input() heading: string = '';
  public personalData: IPersonal = {
    firstName: '',
    lastName: '',
    city: '',
    phoneNumber: '',
    linkedIn: '',
    website: '',
    summary: ''
  }
}
