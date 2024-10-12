import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-arrowlottie',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './arrowlottie.component.html',
  styleUrl: './arrowlottie.component.css'
})
export class ArrowlottieComponent {
  private animationItem: AnimationItem | undefined;

  options: AnimationOptions = {
    path: '../../../assets/lotties/arrowlottie.json',
    loop: true,
    autoplay: true
  };
  
  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }
}
