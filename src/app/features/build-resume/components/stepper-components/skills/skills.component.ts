import { Component, Input } from '@angular/core';
import { ISkill } from '../../../../models/resume.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @Input() heading: string = '';
  public dummySkillData: ISkill =  {
    skillName: ''
  }
  public skillData: Array<ISkill> = [
    {
      skillName: ''
    }
  ]



  public addNewFields() {
    this.skillData.push(JSON.parse(JSON.stringify(this.dummySkillData)))
  }

  public deleteSkillItem(index: number) {
    this.skillData.splice(index,1)
  }

}
