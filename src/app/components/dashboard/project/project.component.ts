import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/app/interfaces/project';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects: Project[];
  project: Project;
  load:boolean = true;
  projectForm: FormGroup;
  error:string;

  constructor(private projectService: ProjectsService, private fb: FormBuilder) { }

  ngOnInit() {

    this.createForm();

    this.projectService.getProjects().subscribe(
      projects => {
        this.projects = projects;
        this.load = false;
      }
    )
  }


  createForm() {
    this.projectForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      technology: ['', [Validators.required]],
      img: ['', [Validators.required]],
      url: ['', [Validators.required]]
    })
  }

  uploadFile(event) {
    this.projectService.uploadFile(event);
  }

  addProject(project: Project) {
    this.projectService.addProject(project).then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    });
    this.projectForm.reset();
  }
}
