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
    email: '',
    registrationNumber: '',
    address: '',
    phoneNumber: '',
    linkedIn: '',
    website: '',
    summary: ''
  }

  public declare image: File;

  public onImageUpload(event: any): void {
    this.image = event.target.files[0]
  }

  public uploadImage(): void {
    //Upload image logic
  }
}
