import { Component, Input } from '@angular/core';
import { IAwards } from '../../../../models/resume.model';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent {
  @Input() heading: string = '';
  public dummyCertificationData: IAwards =  {
    awardName: '',
    description: ''
  }
  public certificationData: Array<IAwards> = [
    {
      awardName: '',
      description: ''
    }
  ]



  public addNewFields() {
    this.certificationData.push(JSON.parse(JSON.stringify(this.dummyCertificationData)))
  }

  public deleteAwardItem(index: number) {
    this.certificationData.splice(index,1)
  }
}
