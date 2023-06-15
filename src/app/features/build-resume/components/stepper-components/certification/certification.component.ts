import { Component, Input } from '@angular/core';
import { ICertification } from '../../../../models/resume.model';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent {
  @Input() heading: string = '';
  public dummyCertificationData: ICertification =  {
    certificationName: '',
    certificationFrom: '',
    year: ''
  }
  public certificationData: Array<ICertification> = [
    {
      certificationName: '',
      certificationFrom: '',
      year: ''
    }
  ]



  public addNewFields() {
    this.certificationData.push(JSON.parse(JSON.stringify(this.dummyCertificationData)))
  }

  public deleteCertificationItem(index: number) {
    this.certificationData.splice(index,1)
  }

}
