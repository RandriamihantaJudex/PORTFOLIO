import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  

  ngAfterViewInit(): void {
      this.lineOne.nativeElement.style.setProperty('--largeur', `${this.nom.nativeElement.clientWidth}px`);
      this.lineTwo.nativeElement.style.setProperty('--largeurTwo', `${this.nom.nativeElement.clientWidth-(this.nom.nativeElement.clientWidth/3)}px`);
  }

}
