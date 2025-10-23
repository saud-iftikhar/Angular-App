import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';

bootstrapApplication(App, {
  providers: [
    provideRouter([]) // Add routes later if needed
  ]
}).catch(err => console.error(err));