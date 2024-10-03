import { Injectable, OnInit, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeModeService  {
  themeMode = signal<string | null>('dark')

  constructor(){
    if(this.isBrowser()){
      if (localStorage.getItem('mode') !== undefined) {
        this.themeMode.set(localStorage.getItem('mode'))
      }
      else {
       this.themeMode.set('null')
      }
    }
  
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  setMode(mode: string) {
    localStorage.setItem('mode', mode)
  }

  changeThemeToggle() {
    this.themeMode.update((value => (value === 'null' ? 'dark' : 'null')))
  }

}
