import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { faSun,faBars,faMoon,faClose ,faDownload,faHome,faLayerGroup,faChevronDown,faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconMenuComponent } from '../icon-menu/icon-menu.component';
import { IconMenuReverseComponent } from '../icon-menu-reverse/icon-menu-reverse.component';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { IconMenuReseauComponent } from '../icon-menu-reseau/icon-menu-reseau.component';
import { MenuService } from '../../services/menu.service';
import { AnimationMenuComponent } from '../animation-menu/animation-menu.component';
import { AnimationMenuTwoComponent } from '../animation-menu-two/animation-menu-two.component';
@Component({
  selector: 'app-slider-menu',
  standalone: true,
  imports: [
    FontAwesomeModule,
    IconMenuComponent,
    IconMenuReverseComponent,
    IconMenuReseauComponent,
    AnimationMenuComponent,
    AnimationMenuTwoComponent
  ],
  templateUrl: './slider-menu.component.html',
  styleUrl: './slider-menu.component.css'
})
export class SliderMenuComponent {
@ViewChild('menuSlider') menuSlider!:ElementRef;

etatMenu=inject(MenuService)
  
// ICONS  
sun =faSun
moon= faMoon
burger=faBars
close = faClose
download=faDownload
home=faHome
projects =faLayerGroup
lien=faChevronDown
send=faPaperPlane
star=faStar
}
