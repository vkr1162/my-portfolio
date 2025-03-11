import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-mypic',
  templateUrl: './mypic.component.html',
  styleUrls: ['./mypic.component.css']
})
export class MypicComponent {
  mouseX = 0;
  mouseY = 0;

  sensitivity = 0.05;
  maxRotation = 15; 
  maxVerticalMove = 40;
  damping = 0.1; 

  currentRotation = 0; 
  currentVerticalMove = 0; 

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
    this.updateHeadPosition();
  }

  updateHeadPosition() {
    const headGroup = document.getElementById('Head');

    if (headGroup) {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = this.mouseX - centerX;
      const deltaY = this.mouseY - centerY;
      const targetRotation = (deltaX / centerX) * this.maxRotation;
      const targetVerticalMove = (deltaY / centerY) * this.maxVerticalMove;
     
      this.currentRotation += (targetRotation - this.currentRotation) * this.damping;
      this.currentVerticalMove += (targetVerticalMove - this.currentVerticalMove) * this.damping;

      headGroup.style.transform = `rotate(${this.currentRotation}deg) translate3d(0, ${this.currentVerticalMove}px, 0)`;
    }
  }
}