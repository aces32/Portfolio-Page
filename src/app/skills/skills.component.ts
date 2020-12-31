import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(public skillsService: SkillsService) { }

  skillset = [];
  ngOnInit() {
    this.skillsService.getSkill().subscribe(data => {
      console.log(data.Skills);
      this.skillset = data.Skills
    })
  }

}
