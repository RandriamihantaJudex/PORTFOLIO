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
import { TitiesComponent } from '../../composant/tities/tities.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProjectComponent, SkillsComponent, FontAwesomeModule, ContactFormComponent, FooterComponent, RouterLink,TitiesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('nom') nom!: ElementRef
  @ViewChild('lineOne') lineOne!: ElementRef
  @ViewChild('lineTwo') lineTwo!: ElementRef
  @ViewChild('projetSection') projetSection!: ElementRef
  @ViewChild('navigation') navigation!: ElementRef
  @ViewChild('skillsSection') skillsSection!: ElementRef
  @ViewChild('aboutSection') aboutSection!: ElementRef
  @ViewChild('LeParent') LeParent!: ElementRef
  @ViewChild('texta') texta!: ElementRef


  skillsIconService = inject(IconSkillsService)
  projectService = inject(ProjectsService)
  favorite = signal(this.projectService.getFavoriteProjects())

  // ICONS
  arrow = faArrowRight

  ngAfterViewInit(): void {
    this.lineOne.nativeElement.style.setProperty('--largeur', `${this.nom.nativeElement.clientWidth}px`);
    this.lineTwo.nativeElement.style.setProperty('--largeurTwo', `${this.nom.nativeElement.clientWidth - (this.nom.nativeElement.clientWidth / 3)}px`);
  }

  // REINITIALIZE L'ETAT DES ENFANT DU SECTION A GAUCHE
  reinitialise() {
    for (const child of this.LeParent.nativeElement.children) {
      child.classList.replace('text-[#00b89f]', 'text-[#363636]')
      child.children[0].classList.remove('pinoccio')
    }
  }

  // PLACER LES CHANGEMENT A L'ELEMENT  
  reinitialiseChild(child: HTMLDivElement) {
    child.classList.replace('text-[#363636]', 'text-[#00b89f]')
    child.children[0].classList.add('pinoccio')
  }

  // ACTIVE L'ETAT DES ENFANT DU SECTION A GAUCHE EN FONCTION DU NIVEAU DE SCROLL
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    if (this.projetSection.nativeElement.getBoundingClientRect().top <= 100) {
      if (this.skillsSection.nativeElement.getBoundingClientRect().top > 100) {
        this.reinitialise()
        this.reinitialiseChild(this.LeParent.nativeElement.children[0])
      }
      else if (this.aboutSection.nativeElement.getBoundingClientRect().top > 100) {
        this.reinitialise()
        this.reinitialiseChild(this.LeParent.nativeElement.children[1])
      }
      else if (this.aboutSection.nativeElement.getBoundingClientRect().top < 0) {
        this.reinitialise()
        this.reinitialiseChild(this.LeParent.nativeElement.children[3])
      }
      else {
        this.reinitialise()
        this.reinitialiseChild(this.LeParent.nativeElement.children[2])
      }

      this.navigation.nativeElement.classList.replace('hidden', 'flex')
    }
    else {
      this.navigation.nativeElement.classList.replace('flex', 'hidden')
    }
  }

}
