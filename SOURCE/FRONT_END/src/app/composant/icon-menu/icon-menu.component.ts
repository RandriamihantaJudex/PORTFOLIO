import { Component, input, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-icon-menu',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './icon-menu.component.html',
  styleUrl: './icon-menu.component.css'
})
export class IconMenuComponent {
@Input() icon:IconDefinition=faHome
@Input() titre:string=''
}
