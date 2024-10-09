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
  imports: [CommonModule, ProjectComponent, SkillsComponent, FontAwesomeModule, ContactFormComponent, FooterComponent, RouterLink],
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
  reinitialise(){
    for (let index = 0; index < this.LeParent.nativeElement.childNodes.length; index++) {
      this.LeParent.nativeElement.childNodes[index].classList.add('text-[#363636]')
      this.LeParent.nativeElement.childNodes[index].classList.remove('text-[#00b89f]')
    }
  }

  // ACTIVE L'ETAT DES ENFANT DU SECTION A GAUCHE EN FONCTION DU NIVEAU DE SCROLL
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    if (this.projetSection.nativeElement.getBoundingClientRect().top <= 100) {      
      if(this.skillsSection.nativeElement.getBoundingClientRect().top > 100){
       this.reinitialise()
       this.LeParent.nativeElement.childNodes[0].classList.remove('text-[#363636]')
       this.LeParent.nativeElement.childNodes[0].classList.add('text-[#00b89f]')
      }
      else if(this.aboutSection.nativeElement.getBoundingClientRect().top > 100){
        this.reinitialise()
        this.LeParent.nativeElement.childNodes[1].classList.remove('text-[#363636]')
        this.LeParent.nativeElement.childNodes[1].classList.add('text-[#00b89f]')
      }
      else if(this.aboutSection.nativeElement.getBoundingClientRect().top < 0){
        this.reinitialise()
        this.LeParent.nativeElement.childNodes[3].classList.remove('text-[#363636]')
        this.LeParent.nativeElement.childNodes[3].classList.add('text-[#00b89f]')
      }
      else{
        this.reinitialise()
        this.LeParent.nativeElement.childNodes[2].classList.remove('text-[#363636]')
        this.LeParent.nativeElement.childNodes[2].classList.add('text-[#00b89f]')
      }
      
      this.navigation.nativeElement.classList.remove('hidden')
      this.navigation.nativeElement.classList.add('flex')
    }
    else {
      this.navigation.nativeElement.classList.remove('flex')
      this.navigation.nativeElement.classList.add('hidden')
    }
  }


}
