import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ProjectComponent } from '../../composant/project/project.component';
import { SkillsComponent } from '../../composant/skills/skills.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectComponent, SkillsComponent,FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('nom') nom!: ElementRef
  @ViewChild('lineOne') lineOne!: ElementRef
  @ViewChild('lineTwo') lineTwo!: ElementRef
 

  langages: Array<string> = [
    'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/others/html.svg',
    'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/programming%20languages/javascript.svg'
    , 'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/programming%20languages/typescript.svg'
    ,'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/frameworks/react.svg'
    , 'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/frameworks/angular.svg'
  ]

  styles:Array<string>=[
'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/others/css.svg',
'../../../assets/images/tailwind.svg', 
'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/frameworks/boostrap.svg' 
]

tools:Array<string>=[
  '../../../assets/images/figma.svg',
  '../../../assets/images/git.svg',
  '../../../assets/images/github.svg',
]

// ICONS
arrow=faArrowRight

  ngAfterViewInit(): void {
    this.lineOne.nativeElement.style.setProperty('--largeur', `${this.nom.nativeElement.clientWidth}px`);
    this.lineTwo.nativeElement.style.setProperty('--largeurTwo', `${this.nom.nativeElement.clientWidth - (this.nom.nativeElement.clientWidth / 3)}px`);
  }



}
