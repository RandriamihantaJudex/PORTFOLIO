import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './composant/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ThemeModeService } from './services/theme-mode.service';
import { LoadingComponent } from './composant/loading/loading.component';
import { SliderMenuComponent } from './composant/slider-menu/slider-menu.component';
import { AnimationMenuTwoComponent } from './composant/animation-menu-two/animation-menu-two.component';
import { MenuService } from './services/menu.service';
import { FooterComponent } from './composant/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    CommonModule,
    LoadingComponent,
    SliderMenuComponent,
    AnimationMenuTwoComponent,
    FooterComponent,
    
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  darkService = inject(ThemeModeService)
  etatMenu= inject(MenuService)

  ngOnInit(): void {
    if(this.isBrowser()){
      localStorage.getItem('mode') !== undefined ? this.darkService.themeMode.set(localStorage.getItem('mode')) : this.darkService.themeMode.set('null')
    }
  }
  
  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

}
