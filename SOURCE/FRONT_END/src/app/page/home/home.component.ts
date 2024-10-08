import { AfterViewInit, Component, ElementRef, HostListener, inject, signal, ViewChild } from '@angular/core';
import { ProjectComponent } from '../../composant/project/project.component';
import { SkillsComponent } from '../../composant/skills/skills.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { IconSkillsService } from '../../services/icon-skills.service';
import { ContactFormComponent } from '../../composant/contact-form/contact-form.component';
import { FooterComponent } from '../../composant/footer/footer.component';
import { ProjectsService } from '../../services/projects.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ProjectComponent, SkillsComponent,FontAwesomeModule,ContactFormComponent,FooterComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('nom') nom!: ElementRef
  @ViewChild('lineOne') lineOne!: ElementRef
  @ViewChild('lineTwo') lineTwo!: ElementRef
  
  skillsIconService= inject(IconSkillsService)
  projectService= inject(ProjectsService)
  favorite = signal(this.projectService.getFavoriteProjects())
// ICONS
arrow=faArrowRight

  ngAfterViewInit(): void {
    this.lineOne.nativeElement.style.setProperty('--largeur', `${this.nom.nativeElement.clientWidth}px`);
    this.lineTwo.nativeElement.style.setProperty('--largeurTwo', `${this.nom.nativeElement.clientWidth - (this.nom.nativeElement.clientWidth / 3)}px`);
  }



}
