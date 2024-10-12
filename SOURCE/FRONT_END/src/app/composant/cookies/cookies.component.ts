import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { ArrowlottieComponent } from '../arrowlottie/arrowlottie.component';
@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [FontAwesomeModule,ArrowlottieComponent],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.css'
})
export class CookiesComponent {
download =faDownload


aff(){
  console.log('download');
  
}
}
