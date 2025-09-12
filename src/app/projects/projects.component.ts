import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  img: string;
  link?: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Turnos web',
      description: 'Aplicación web para ofrecer un sistema de turnos.',
      technologies: ['Firebase', 'React'],
      img: 'img/proyectos/turnos/turnos.jpg',
      link: 'https://turnos-kappa.vercel.app',
    },
    {
      title: 'Empresa de software',
      description: 'Página web para una empresa de servicios de software.',
      technologies: ['React', 'Tailwind'],
      github: 'https://github.com/alanberns/ViteApp',
      img: 'img/proyectos/ViteApp/ViteApp.jpg',
      link: 'https://alanberns.github.io/ViteApp',
    },
    {
      title: 'Cuanto vale tu sueldo',
      description: 'Página web para hacer comparaciones de tu sueldo en el tiempo.',
      technologies: ['React', 'Tailwind'],
      github: 'https://github.com/alanberns/ViteApp',
      img: 'img/proyectos/cuanto/cuanto.jpg',
      link: 'https://alanberns.github.io/cuanto-vale',
    },
    {
      title: 'Horarios de colectivos',
      description: 'Extensión de uso personal sobre la aplicación de Unión Platense.',
      technologies: ['React', 'Tailwind'],
      img: 'img/proyectos/bondi/bondi.jpg',
    },
    {
      title: 'Floorplan Management System',
      description: 'Aplicación web para gestionar planos de proyectos de construcción.',
      technologies: ['Docker', 'Vue.js', 'Nest.js', 'TypeScript', 'Mongo DB', 'Bootstrap'],
      github: 'https://github.com/alanberns/FloorplanMS',
      img: 'img/proyectos/floorplan/floorplanms.jpg',
    },
    {
      title: 'Club de tenis',
      description: 'Aplicación web para un club de tenis.',
      technologies: ['Docker', 'React', 'PHP', 'Symfony', 'mySQL'],
      github: 'https://github.com/MAPAW-UNLP',
      img: 'img/proyectos/tenis/tenis.jpg',
    },
    {
      title: 'App de notas',
      description: 'Aplicación web para crear notas.',
      technologies: ['Vue.js', 'Ruby', 'Rails', 'SQLite', 'Bootstrap'],
      github: 'https://github.com/alanberns/NotesApp',
      img: 'img/proyectos/notesapp/notesapp.jpg',
    },
    {
      title: '¡OhMyDog!',
      description: 'Aplicación web para acortar enlaces.',
      technologies: ['Docker', 'Node.js', 'Express', 'PostgreSQL', 'Bootstrap'],
      github: 'https://github.com/alanberns/ohmydog',
      img: 'img/proyectos/ohmydog/ohmydog.png',
    },
    {
      title: 'chq.to',
      description: 'Sistema web para una veterinaria.',
      technologies: ['Docker', 'Ruby', 'Rails', 'SQLite', 'Bootstrap'],
      github: 'https://github.com/alanberns/chq.to',
      img: 'img/proyectos/chqto/chqto.png',
    },
    {
      title: 'Club Deportivo Villa Elisa',
      description: 'Sistema web para la administración del club y portal para socios.',
      technologies: ['Docker', 'Vue.js', 'Python', 'Flask', 'PostgreSQL'],
      github: 'https://github.com/alanberns/CDVE',
      img: 'img/proyectos/cdve/cdve.png',
    },
  ];
}
