import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit {
  route = signal('')

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.route.set(window.location.href);
    }
  }
}
