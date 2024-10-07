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
        title: 'Padawan',
        image: '../../assets/images/padawan.png',
        link: { github: 'https://github.com/RandriamihantaJudex/PADAWAN_PROJECT.git', web: 'http://padawan-12.web.app/' },
        description: 'Padawan is a web platform that facilitates connections between students and professionals in their field, with the goal of creating mentorship opportunities. Professionals provide advice, support, and guidance to help students advance in their academic and professional journeys.',
        objectives: [
          "Facilitate students' integration into the professional world.",
          "Help students learn best practices in the workplace.",
          "Enable experienced professionals to mentor the next generation.",
          "Promote the digital sector and its opportunities."
        ],
        images: ['../../assets/images/padawan.png','../../assets/images/padawan.png'],
        technology: [{nom:'React',image:'../../assets/images/react.svg'},{nom:'Tailwind Css',image:'../../assets/images/tailwind.svg'}],
        anectodes: 'Aucune Actuellement',
        favorite: true
      },
      {
        title: 'My Portfolio',
        image: 'dfdf',
        link: { github: 'https://github.com/RandriamihantaJudex/PORTFOLIO.git', web: '' },
        description: 'This site is my personal platform where I showcase all my work and provide some information about myself. I also welcome anyone interested in contacting me.',
        objectives: ['Showcase the projects I have completed.','Establish an online presence.','Centralize information about myself that may be useful to others.','Facilitate collaboration opportunities.'],
        images: [''],
        technology: [{nom:'Angular',image:'../../assets/images/angular.svg'},{nom:'Tailwind Css',image:'../../assets/images/tailwind.svg'},{nom:'Splidejs',image:'../../assets/images/splide.svg'}],
        anectodes: 'Aucune Actuellement',
        favorite: true
      },
      {
        title: 'Portfolio',
        image: 'dfdf',
        link: { github: '', web: '' },
        description: '',
        objectives: [''],
        images: [''],
        technology: [{nom:'',image:''}],
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
        technology: [{nom:'',image:''}],
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
