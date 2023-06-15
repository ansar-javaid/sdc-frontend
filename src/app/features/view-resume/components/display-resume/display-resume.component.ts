import { Component } from '@angular/core';
import { IResume } from 'src/app/features/models/resume.model';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-display-resume',
  templateUrl: './display-resume.component.html',
  styleUrls: ['./display-resume.component.scss']
})
export class DisplayResumeComponent {
  public declare resumeData: IResume;
  
  constructor(private resumeService: ResumeService){}

  ngOnInit(): void {
    this.resumeData = this.resumeService.getResumeData();
  }
}
