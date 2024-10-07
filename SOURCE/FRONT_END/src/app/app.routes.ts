import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';
import { ProjectComponent } from './composant/project/project.component';
import { ProjectsComponent } from './page/projects/projects.component';
import { NotFoundComponent } from './page/not-found/not-found.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent,title:'Home'},
    {path:'contact',component:ContactComponent,title:'Contact'},
    {path:'projects/:name',component:ProjectsComponent,title:'Projects'},
    {path:'',redirectTo:"home",pathMatch:'full'},
    { path: '**', component: NotFoundComponent },
];
