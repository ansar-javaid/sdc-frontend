import { Component, Input } from '@angular/core';
import { IAwards, ICertification, IEducation, IReferences, ISkill, IWork } from 'src/app/features/models/resume.model';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.scss']
})
export class DisplayDetailsComponent {
  @Input() declare workExperience:IWork;
  @Input() declare education: IEducation;
  @Input() declare skills: ISkill;
  @Input() declare certification: ICertification;
  @Input() declare awards: IAwards;
  @Input() declare references: IReferences;

  public title: string = '';
  public from: string = '';
  public startYear: string = '';
  public endYear: string = '';

  public ngOnInit(): void {
    if (this.workExperience) {
     this.setWorkData(this.workExperience);
    } else if (this.education) {
      this.setEducationData(this.education);
    } else if (this.skills) {
      this.setSkillData(this.skills);
    } else if (this.certification) {
      this.setCertificationData(this.certification);
    } else if (this.awards) {
      this.setAwardsData(this.awards);
    } else if (this.references) {
      this.setReferencesData(this.references);
    }
  }

  private setWorkData(data: IWork): void {
    this.title = this.workExperience.jobTitle;
    this.from = this.workExperience.companyName;
    this.startYear = this.workExperience.startYear;
    this.endYear = this.workExperience.endYear;
  }

  private setEducationData(data: IEducation): void {
    this.title = this.education.major;
    this.from = this.education.instituteName;
    this.startYear = this.education.startYear;
    this.endYear = this.education.endYear;
  }

  private setSkillData(data: ISkill): void {
    this.title = this.skills.skillName
  }

  private setCertificationData(data: ICertification): void {
    this.title = data.certificationFrom;
    this.from = data.certificationFrom;
    this.endYear = data.year;
  }

  private setAwardsData(data: IAwards): void {
    this.title = data.awardName;
    this.endYear = data.description;
  }

  private setReferencesData(data: IReferences): void {
    this.title = data.name;
    this.from = data.email;
    this.endYear = data.phoneNumber;
  }
}
