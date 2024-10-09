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
  @ViewChild('sunRef') sunRef!: ElementRef;
  @ViewChild('moonRef') moonRef!: ElementRef;

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
      this.addClass(this.moonRef)
      this.removeClass(this.sunRef)
    }
    else{
      this.removeClass(this.moonRef)
      this.addClass(this.sunRef)
    }
    
}
  changeTheme() {
    // Le theme "null" c'est le dark mode et le theme "dark" c'est le light mode
    this.themeService.changeThemeToggle()

    //  Ceci stock le mode(dark/null) dans le localstorage
    this.themeService.themeMode() === 'null' ? this.themeService.setMode('null') : this.themeService.setMode('dark')

    if (this.moonRef.nativeElement.classList.contains('invisible')) {
      this.removeClass(this.moonRef)
      this.addClass(this.sunRef)
    }
    else {
      this.addClass(this.moonRef)
      this.removeClass(this.sunRef)
    }
  }


  


}
