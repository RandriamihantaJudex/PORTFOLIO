import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent,title:'Home'},
    {path:'contact',component:ContactComponent,title:'Contact'},
    {path:'',redirectTo:"home",pathMatch:'full'},
];
