import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(public resumeservice: ResumeService) { }
  Experiences = [];
  Educations = [];
  ngOnInit() {
    this.resumeservice.getExperience().subscribe(data => {
      console.log(data.Experience);
      this.Experiences = data.Experience
      this.Educations = data.Education
    })
  }

}
