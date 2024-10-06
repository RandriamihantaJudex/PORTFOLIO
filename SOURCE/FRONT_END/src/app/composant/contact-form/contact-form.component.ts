import { Component } from '@angular/core';
import {ReactiveFormsModule,FormControl,FormGroup, MinLengthValidator, Validators} from '@angular/forms'
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
    email: new FormControl('',[Validators.required,Validators.email]),
    nom:new FormControl('',[Validators.minLength(2)]),
    message:new FormControl('',[Validators.minLength(1)]),
  }    
  )

  //ICONES
  email=faEnvelope
  nom=faUser
  messageIcon=faMessage


  sendMessage(){
    if(this.contactForm.valid){
      console.log(this.contactForm.value);
    }
    else{
      console.log('invalid');
    }
  }  

}
