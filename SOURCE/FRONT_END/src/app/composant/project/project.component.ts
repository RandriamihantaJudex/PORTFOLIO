import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../../interfaces/project.interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

@Input() project:Project | undefined 
  
// ICONES 
github=faGithub
globe=faGlobe
}
