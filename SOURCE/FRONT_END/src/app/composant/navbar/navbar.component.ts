import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faBars, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { ThemeModeService } from '../../services/theme-mode.service';
import { AsyncLocalStorage } from 'async_hooks';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  themeService = inject(ThemeModeService)
  @ViewChild('sunRef') sunRef!: ElementRef;
  @ViewChild('moonRef') moonRef!: ElementRef;
  //ICONES
  burger = faBars
  sun = faSun
  moon = faMoon


  // Parametre dark/light Mode
  removeClass(element:ElementRef){
    element.nativeElement.classList.remove('invisible')
  }
  addClass(element:ElementRef){
    element.nativeElement.classList.add('invisible')
  }

  changeTheme() {
    this.themeService.getTheme()
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
