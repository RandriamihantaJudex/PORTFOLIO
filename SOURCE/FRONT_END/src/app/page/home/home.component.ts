import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ProjectComponent } from '../../composant/project/project.component';
import { SkillsComponent } from '../../composant/skills/skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('nom') nom!: ElementRef
  @ViewChild('lineOne') lineOne!: ElementRef
  @ViewChild('lineTwo') lineTwo!: ElementRef
  @ViewChild('titre') titre!: ElementRef
  @ViewChild('titreLeure') titreLeure!: ElementRef

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

  ngAfterViewInit(): void {
    this.lineOne.nativeElement.style.setProperty('--largeur', `${this.nom.nativeElement.clientWidth}px`);
    this.lineTwo.nativeElement.style.setProperty('--largeurTwo', `${this.nom.nativeElement.clientWidth - (this.nom.nativeElement.clientWidth / 3)}px`);
  }

  // 
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    console.log(this.titre.nativeElement.getBoundingClientRect().top);
    if (window.scrollY > 530 && window.scrollY < 1135) {
      if (this.titre.nativeElement.getBoundingClientRect().top < 47) {
        this.titreLeure.nativeElement.classList.remove('hidden')
        this.titre.nativeElement.classList.add('titre')
      }
    }
    else {
      if (this.titre.nativeElement.classList.contains('titre')) {
        this.titreLeure.nativeElement.classList.add('hidden')
        this.titre.nativeElement.classList.remove('titre')
      }
    }
  }


}
