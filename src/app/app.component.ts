import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingScreenComponent } from './core/loading-screen/loading-screen.component';
import { TrackingComponent } from './features/tracking/tracking.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoadingScreenComponent,
    TrackingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  protected readonly title = 'pargo-app';
  public pageIsLoading: boolean = true;

  public ngOnInit(): void {
    // I really discourage using timeOuts
    // but this is in place to simulate a loading time

    setTimeout(() => {
      this.pageIsLoading = false;
    }, 2000);
  }

  public captureLoadingState(event: boolean): void {
    this.pageIsLoading = event;
  }
}
