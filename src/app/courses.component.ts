import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-courses', // ✅ Changed to app-courses
    standalone: true, // ✅ Added standalone
    imports: [CommonModule], // ✅ Added CommonModule
    template: `
      <section class="courses-section">
        <h2>Available Courses</h2>
        
        <div class="courses-grid">
          <div *ngFor="let course of courses()" class="course-card">
            <h3>{{ course.title }}</h3>
            <p>{{ course.description }}</p>
            <span class="duration">{{ course.duration }} hours</span>
            <button 
              class="enroll-btn"
              (click)="enrollCourse(course.id)">
              Enroll Now
            </button>
          </div>
        </div>

        <div *ngIf="loading()" class="loading">Loading courses...</div>
      </section>
    `,
    styles: [`
      .courses-section {
        padding: 2rem 0;
      }

      .courses-section h2 {
        color: #1f2937;
        margin-bottom: 1.5rem;
        font-size: 2rem;
      }

      .courses-grid {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      }

      .course-card {
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 1.5rem;
        transition: all 0.3s ease;
      }

      .course-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      }

      .course-card h3 {
        color: #1f2937;
        margin: 0 0 0.5rem 0;
      }

      .course-card p {
        color: #6b7280;
        margin: 0 0 1rem 0;
      }

      .course-card .duration {
        background: #f3f4f6;
        color: #4b5563;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.875rem;
        margin-bottom: 1rem;
        display: inline-block;
      }

      .enroll-btn {
        width: 100%;
        background: #3b82f6;
        color: white;
        border: none;
        padding: 0.75rem 1rem;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
      }

      .enroll-btn:hover {
        background: #2563eb;
      }

      .loading {
        text-align: center;
        padding: 3rem;
        color: #6b7280;
      }
    `] // ✅ Added inline styles to keep it simple
})
export class CoursesComponent implements OnInit {
  protected readonly courses = signal<any[]>([]);
  protected readonly loading = signal(false);

  ngOnInit(): void {
    this.loadCourses();
  }

  private loadCourses(): void {
    this.loading.set(true);
    
    // Simulate API call
    setTimeout(() => {
      this.courses.set([
        {
          id: 1,
          title: 'Angular Fundamentals',
          description: 'Learn the basics of Angular framework',
          duration: 8
        },
        {
          id: 2,
          title: 'TypeScript Mastery',
          description: 'Deep dive into TypeScript features',
          duration: 6
        },
        {
          id: 3,
          title: 'RxJS & Reactive Programming',
          description: 'Master reactive programming in Angular',
          duration: 10
        }
      ]);
      this.loading.set(false);
    }, 1000);
  }

  enrollCourse(courseId: number): void {
    alert(`Enrolling in course ${courseId}!`);
    // Add your enrollment logic here
  }
}