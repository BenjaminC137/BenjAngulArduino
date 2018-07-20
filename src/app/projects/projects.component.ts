import { Component, OnInit } from '@angular/core';
import { ProjectModel }  from '../project-model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

	project: ProjectModel = {
		id: 8,
		title: 'HomeBox',
		dateYear: 2018
	}
  constructor() { }

  ngOnInit() {
  }

}
