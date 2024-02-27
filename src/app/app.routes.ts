import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './core/error/error.component';
import { TrackingComponent } from './features/tracking/tracking.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'track', component: TrackingComponent },
  { path: '**', component: ErrorComponent }
];
