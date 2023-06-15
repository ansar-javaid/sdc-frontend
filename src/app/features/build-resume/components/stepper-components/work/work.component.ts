import { Component, Input } from '@angular/core';
import { IWork } from '../../../../models/resume.model';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  @Input() heading: string = '';
  public dummyEducationData: IWork =  {
    companyName: '',
    jobTitle: '',
    startYear: '',
    endYear: ''
  }
  public educationData: Array<IWork> = [
    {
      companyName: '',
      jobTitle: '',
      startYear: '',
      endYear: ''
    }
  ]



  public addNewFields() {
    this.educationData.push(JSON.parse(JSON.stringify(this.dummyEducationData)))
  }

  public deleteWorkItem(index: number) {
    this.educationData.splice(index,1)
  }

}
