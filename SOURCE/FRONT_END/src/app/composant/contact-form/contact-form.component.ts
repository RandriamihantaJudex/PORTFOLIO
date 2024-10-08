import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faUser, faMessage } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    nom: new FormControl('', [Validators.required,Validators.minLength(2)]),
    message: new FormControl('', [Validators.required,Validators.minLength(1)]),
  }
  )


  @ViewChild('emailRef') emailsRef!: ElementRef
  @ViewChild('nomRef') nomsRef!: ElementRef
  @ViewChild('messageRef') messagesRef!: ElementRef

  invalidityForm=signal(false)

  //ICONES
  email = faEnvelope
  nom = faUser
  messageIcon = faMessage


  sendMessage() {
    if(this.contactForm.invalid){
      this.invalidityForm.set(true)
      console.log('invalid');
    }
    else{
      console.log(this.contactForm.value);
      this.invalidityForm.set(false)
    }
   
  }

  get userEmail() {
    return this.contactForm.get('email') as FormControl
  }
  get userNom() {
    return this.contactForm.get('nom') as FormControl
  }
  get userMessage() {
    return this.contactForm.get('message') as FormControl
  }

  invalidity(elementRef:ElementRef,getteur:FormControl) {
    this.invalidityForm.set(false)
    if (getteur.invalid) {
      elementRef.nativeElement.classList.remove('border-[#00b89f]')
      elementRef.nativeElement.classList.add('border-red-600')
    }
    else {
      elementRef.nativeElement.classList.remove('border-red-600')
      elementRef.nativeElement.classList.add('border-[#00b89f]')
    }
  }

}
