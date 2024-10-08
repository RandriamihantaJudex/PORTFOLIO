import { Component, inject, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faSliders } from '@fortawesome/free-solid-svg-icons';
import { ProjectsService } from '../../services/projects.service';
import { ProjectComponent } from '../../composant/project/project.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Project } from '../../interfaces/project.interface';
@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [FontAwesomeModule, ProjectComponent, ReactiveFormsModule],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.css'
})
export class ProjectsListComponent {
  service = inject(ProjectsService)
  listProject = signal(this.service.getAllProject())

  recherche = new FormGroup({
    searchField: new FormControl('')
  })

  searchProject(): void {
    let listFind: Project[]
    let valeur = this.recherche.value.searchField?.toLowerCase()
    if (valeur !== '' && valeur !== undefined && valeur !== null) {
      listFind = this.service.getAllProject().filter(project => project.title.toLowerCase().includes(valeur))
      this.listProject.set(listFind)
    }
    else {
      this.listProject.set(this.service.getAllProject())
    }

  }

  //ICONES  
  search = faSearch
  filter = faSliders
}
