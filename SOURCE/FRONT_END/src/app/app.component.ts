import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { NavbarComponent } from './composant/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ThemeModeService } from './services/theme-mode.service';
import { LoadingComponent } from './composant/loading/loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  darkService = inject(ThemeModeService)
  ngOnInit(): void {
    if (localStorage.getItem('mode')!==undefined) {
      this.darkService.themeMode.set(localStorage.getItem('mode'))
      console.log(localStorage);
    }
    else {
      this.darkService.themeMode.set('null')
    }
  }
}
