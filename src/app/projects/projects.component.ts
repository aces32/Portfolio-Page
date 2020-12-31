import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(public projectservice : ProjectsService) { }

  projectstaken = []

  ngOnInit() {
    this.projectservice.getProjects().subscribe(data =>
      this.projectstaken = data.Projects

    )
  }

}
