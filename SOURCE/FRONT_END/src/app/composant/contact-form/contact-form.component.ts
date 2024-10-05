import { Component } from '@angular/core';
import {ReactiveFormsModule,FormControl,FormGroup} from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope ,faUser,faMessage} from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule,FontAwesomeModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  contactForm =new FormGroup({
    email: new FormControl(''),
    nom:new FormControl(''),
    message:new FormControl(''),
  }    
  )

  //ICONES
  email=faEnvelope
  nom=faUser
  messageIcon=faMessage

}
