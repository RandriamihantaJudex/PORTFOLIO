import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-icon-menu-reseau',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './icon-menu-reseau.component.html',
  styleUrl: './icon-menu-reseau.component.css'
})
export class IconMenuReseauComponent  {
@Input() icon:IconDefinition=faHome
@Input() titre:string=''
@ViewChild('socials') socials!:ElementRef


showSlocials(){
  if(this.socials.nativeElement.classList.contains('hidden')){
    this.socials.nativeElement.classList.remove('hidden')
    this.socials.nativeElement.classList.add('flex')
  }
  else{
    this.socials.nativeElement.classList.remove('flex')
    this.socials.nativeElement.classList.add('hidden')
  }
}

lienReseau(link:string){
  // console.log(link); 
}



// ICONES
github=faGithub
facebook=faFacebook
linkedin= faLinkedin

}
