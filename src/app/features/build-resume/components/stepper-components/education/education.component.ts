import { Component, Input } from '@angular/core';
import { IEducation } from '../../../models/resume.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  @Input() heading: string = '';
  public dummyEducationData: IEducation =  {
    instituteName: '',
    major: '',
    startYear: '',
    endYear: ''
  }
  public educationData: Array<IEducation> = [
    {
      instituteName: '',
      major: '',
      startYear: '',
      endYear: ''
    }
  ]



  public addNewFields() {
    this.educationData.push(JSON.parse(JSON.stringify(this.dummyEducationData)))
  }

  public deleteEducationItem(index: number) {
    this.educationData.splice(index,1)
  }

}
