import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-tities',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './tities.component.html',
  styleUrl: './tities.component.css'
})
export class TitiesComponent {
  private animationItem: AnimationItem | undefined;

  options: AnimationOptions = {
    path: '../../../assets/lotties/home.json',
    loop: true,
    autoplay: true
  };
  
  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

 
}
