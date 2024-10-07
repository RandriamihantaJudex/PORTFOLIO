import { Component, inject, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../../interfaces/project.interface';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule,RouterLink],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  @Input() project: Project | undefined
  router = inject(Router)

  // ICONES 
  github = faGithub
  globe = faGlobe

  redirect(link: string) {
    this.router.navigate(['projects/' + link])
    console.log(link);
  }

}
