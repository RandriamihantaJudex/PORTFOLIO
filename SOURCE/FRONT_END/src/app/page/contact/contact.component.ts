import { ContactFormComponent } from '../../composant/contact-form/contact-form.component';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger,faLinkedin,faDiscord,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent,FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  messenger=faFacebookMessenger
  linkedIn=faLinkedin
  discord=faDiscord
  gmail=faEnvelope
  insta=faInstagram
  flamme=faFireFlameCurved
}
