import { Component } from '@angular/core';
import { faSun,faBars,faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-slider-menu',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './slider-menu.component.html',
  styleUrl: './slider-menu.component.css'
})
export class SliderMenuComponent {
sun =faSun
moon= faMoon
burger=faBars
}
