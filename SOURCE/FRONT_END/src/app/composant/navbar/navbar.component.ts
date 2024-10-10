import {AfterViewInit, Component, ElementRef, inject,ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faBars, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { ThemeModeService } from '../../services/theme-mode.service';
import { SliderMenuComponent } from '../slider-menu/slider-menu.component';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../services/menu.service';
import { AnimationMenuTwoComponent } from '../animation-menu-two/animation-menu-two.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule,SliderMenuComponent,CommonModule,AnimationMenuTwoComponent,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {

  etatMenu= inject(MenuService)
  themeService = inject(ThemeModeService)
  
  @ViewChild('sunRef') sunRefe!: ElementRef;
  @ViewChild('moonRef') moonRefe!: ElementRef;
  @ViewChild('sunRefa') sunRefs!: ElementRef;
  @ViewChild('moonRefa') moonRefs!: ElementRef;

  //ICONES
  burger = faBars
  sun = faSun
  moon = faMoon

  

  // Parametre dark/light Mode
  removeClass(element: ElementRef) {
    element.nativeElement.classList.remove('invisible')
  }
  addClass(element: ElementRef) {
    element.nativeElement.classList.add('invisible')
  }

  
ngAfterViewInit(): void {
    // change l'icone en soleil/lune en fonction du mode apres l'initialisation des composants 
    if(this.themeService.themeMode() === 'dark'){
      this.addClass(this.moonRefe)
      this.removeClass(this.sunRefe)
      // md
      this.addClass(this.moonRefs)
      this.removeClass(this.sunRefs)
    }
    else{
      this.removeClass(this.moonRefe)
      this.addClass(this.sunRefe)
      // md
      this.removeClass(this.moonRefs)
      this.addClass(this.sunRefs)
    }
    
}
  changeTheme(sun:ElementRef,moon:ElementRef) {
    // Le theme "null" c'est le dark mode et le theme "dark" c'est le light mode
    this.themeService.changeThemeToggle()

    //  Ceci stock le mode(dark/null) dans le localstorage
    this.themeService.themeMode() === 'null' ? this.themeService.setMode('null') : this.themeService.setMode('dark')

    if (moon.nativeElement.classList.contains('invisible')) {
      this.removeClass(moon)
      this.addClass(sun)
    }
    else {
      this.addClass(moon)
      this.removeClass(sun)
    }
  }


  


}
