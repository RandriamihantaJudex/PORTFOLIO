import { Component, input, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-menu-reverse',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './icon-menu-reverse.component.html',
  styleUrl: './icon-menu-reverse.component.css'
})
export class IconMenuReverseComponent {
@Input() icon:IconDefinition=faHome
@Input() titre:string=''
}
