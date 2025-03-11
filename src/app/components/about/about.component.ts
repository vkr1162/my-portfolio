import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  ngOnInit() {
    this.checkImageVisibility();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkImageVisibility();
  }

  checkImageVisibility() {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        img.classList.add('loaded');
      }
    });
  }
}
