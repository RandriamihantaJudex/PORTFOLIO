import { AfterContentInit, AfterRenderRef, AfterViewInit, Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
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
export class NavbarComponent implements AfterViewInit {
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
    // le theme "null" c'est le dark mode et le theme "dark" c'est le light mode
    this.themeService.changeThemeToggle()

    //  ceci stock le mode(dark/null) dans le localstorage
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
