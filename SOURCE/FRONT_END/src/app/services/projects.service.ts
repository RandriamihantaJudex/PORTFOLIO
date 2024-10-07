import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project.interface';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {



  getAllProject(): Project[] {
    return [
      {
        title: 'judex',
        image: 'dfdf',
        link: { github: '', web: '' },
        description: '',
        objectives: [''],
        images: [''],
        technology: [''],
        anectodes: 'string',
        favorite: true
      },
      {
        title: 'padawan',
        image: 'dfdf',
        link: { github: '', web: '' },
        description: '',
        objectives: [''],
        images: [''],
        technology: [''],
        anectodes: 'string',
        favorite: true
      },
      {
        title: 'Portfolio',
        image: 'dfdf',
        link: { github: '', web: '' },
        description: '',
        objectives: [''],
        images: [''],
        technology: [''],
        anectodes: 'string',
        favorite: true
      },
      {
        title: 'last',
        image: 'dfdf',
        link: { github: '', web: '' },
        description: '',
        objectives: [''],
        images: [''],
        technology: [''],
        anectodes: 'string',
        favorite: false
      }
    ]
  }


  getFavoriteProjects(): Project[] {
    let favorites = this.getAllProject().filter(fav => fav.favorite === true)
    return favorites
  }

  getProject(title: string): Project | undefined {
    let projectFind: Project | undefined = this.getAllProject().find(index => index.title === title)
    if (projectFind) {
      return projectFind
    }
    return undefined
  }

}
