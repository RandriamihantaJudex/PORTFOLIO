import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeModeService {
  themeMode= signal<string>('null')

  getTheme(){
      this.themeMode.update((value=>(value==='dark'?'null':'dark')))
  }


}
