import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ProjectComponent } from '../../composant/project/project.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements AfterViewInit{
  @ViewChild('nom') nom!: ElementRef
  @ViewChild('lineOne') lineOne!: ElementRef
  @ViewChild('lineTwo') lineTwo!: ElementRef
  @ViewChild('titre') titre!:ElementRef
  @ViewChild('titreLeure') titreLeure!:ElementRef

 


  ngAfterViewInit(): void {
      this.lineOne.nativeElement.style.setProperty('--largeur', `${this.nom.nativeElement.clientWidth}px`);
      this.lineTwo.nativeElement.style.setProperty('--largeurTwo', `${this.nom.nativeElement.clientWidth-(this.nom.nativeElement.clientWidth/3)}px`);
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    console.log(window.scrollY);  
    if(window.scrollY>530 && window.scrollY<1135){
      if(this.titre.nativeElement.getBoundingClientRect().top<450){
        this.titreLeure.nativeElement.classList.remove('hidden')
        this.titre.nativeElement.classList.add('titre')
      }
    }
    else{
      if(this.titre.nativeElement.classList.contains('titre')){
        this.titreLeure.nativeElement.classList.add('hidden')
        this.titre.nativeElement.classList.remove('titre')
      }
    }
   
   
    
  }


}
