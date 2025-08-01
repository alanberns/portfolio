import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certificate {
  title: string;
  institution: string;
  date: string;
  technologies: string[];
  image?: string;
}

@Component({
  selector: 'app-certificates',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
  certificates: Certificate[] = [
    {
      title: 'Java Full-Stack',
      institution: 'Codo a Codo',
      date: 'Diciembre 2021',
      technologies: ['Java', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'MySQL'],
      image: 'img/certificados/Java.jpg'
    },
    {
      title: 'Especialización Spring',
      institution: 'Codo a Codo',
      date: 'Diciembre 2022',
      technologies: ['Java', 'Spring', 'Hibernate', 'PostgreSQL'],
      image: 'img/certificados/Spring.jpg'
    },
    {
      title: 'Ciencia de Datos',
      institution: 'Argentina Programa - Universidad Nacional de Salta',
      date: 'Octubre 2023',
      technologies: ['Python', 'Numpy', 'Matplotlib', 'Seaborn', 'Pandas'],
      image: 'img/certificados/CienciaDatos.jpg'
    },
    {
      title: 'Machine Learning',
      institution: 'Argentina Programa - Universidad Nacional de Salta',
      date: 'Noviembre 2023',
      technologies: ['Python', 'Numpy', 'Scikit-learn', 'TensorFlow', 'Keras'],
      image: 'img/certificados/MachineLearning.jpg'
    },
    {
      title: 'Pandas y Numpy',
      institution: 'Argentina Programa - Universidad Nacional de Salta',
      date: 'Octubre 2023',
      technologies: ['Python', 'Numpy', 'Pandas'],
      image: 'img/certificados/PandasyNumpy.jpg'
    },
  ];
}
