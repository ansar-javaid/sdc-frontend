import { Injectable } from '@angular/core';
import { IResume } from '../../models/resume.model';
import { Observable, of } from 'rxjs';
import { dummyResumeData } from '../constants/dummy-resume-data.const';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() { }

  getResumeData():IResume {
    return dummyResumeData
  }
}
