import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger,faLinkedin,faDiscord,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
// ICONES
messenger=faFacebookMessenger
linkedIn=faLinkedin
discord=faDiscord
gmail=faEnvelope
insta=faInstagram
flamme=faFireFlameCurved
}
