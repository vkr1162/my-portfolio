import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MypicComponent } from "./components/mypic/mypic.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { TitleSectionComponent } from "./components/title-section/title-section.component";
import { AboutComponent } from "./components/about/about.component";
import { WorkComponent } from "./components/work/work.component";
import { ProjectsComponent } from "./components/projects/projects.component";

@Component({
  selector: 'app-root',
  imports: [MypicComponent, NavbarComponent, TitleSectionComponent, AboutComponent, WorkComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-portfolio';
}
