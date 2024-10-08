import { Component, inject, OnInit, signal } from '@angular/core';
import { NgxSplideModule } from 'ngx-splide';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../../interfaces/project.interface';
import { ProjectsService } from '../../services/projects.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgxSplideModule,FontAwesomeModule,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{
service=inject(ProjectsService)
project:Project | undefined
routeActuel=inject(ActivatedRoute)



ngOnInit(): void {
    let project= this.routeActuel.snapshot.paramMap.get('name')
    if(project){
      this.project = this.service.getProject(project)
    } 
}
  
//ICONES 
github =faGithub
globe= faGlobe



}
