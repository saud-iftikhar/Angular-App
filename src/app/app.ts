import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from './courses.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoursesComponent], // ✅ Added CoursesComponent
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular Learning Platform');
}