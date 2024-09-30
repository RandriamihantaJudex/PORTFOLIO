import { Injectable, OnInit, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeModeService  {
  themeMode = signal<string | null>('null')


  setMode(mode: string) {
    localStorage.setItem('mode', mode)
  }

  changeThemeToggle() {
    this.themeMode.update((value => (value === 'null' ? 'dark' : 'null')))
  }

}
