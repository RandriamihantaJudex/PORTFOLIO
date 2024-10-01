import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  // cette service permet d'afficher/fermer le menu
  menuState=signal('nope')


  chageMenuState(){
    this.menuState()==='in'?this.menuState.set('out'):this.menuState.set('in')
  }
  
}
