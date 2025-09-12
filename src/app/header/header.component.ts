import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  menuOpen = false;
  scrolled = false;
  isDesktop = window.innerWidth >= 640; // Tailwind sm breakpoint

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 50;

    // Si volvés al top y estás en desktop, cerramos el menú hamburguesa
    if (!this.scrolled && this.isDesktop && this.menuOpen) {
      this.menuOpen = false;
    }
  }


  @HostListener('window:resize')
  onResize() {
    this.isDesktop = window.innerWidth >= 640;
  }

  ngOnInit() {
    this.onResize();
  }
}
