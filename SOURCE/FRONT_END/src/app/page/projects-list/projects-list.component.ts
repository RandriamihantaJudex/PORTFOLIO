import { Component, inject, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch,faSliders } from '@fortawesome/free-solid-svg-icons';
import { ProjectsService } from '../../services/projects.service';
import { ProjectComponent } from '../../composant/project/project.component';
@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [FontAwesomeModule,ProjectComponent],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.css'
})
export class ProjectsListComponent {
service=inject(ProjectsService)  
listProject= signal(this.service.getAllProject())
//ICONES  
search =faSearch
filter=faSliders
}
