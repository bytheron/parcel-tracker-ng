import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TrackingMapComponent } from './components/tracking-map/tracking-map.component';

@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    TrackingMapComponent
  ],
  templateUrl: './tracking.component.html',
  styleUrl: './tracking.component.scss'
})
export class TrackingComponent {
  @Output()
  public loadingStateUpdated: EventEmitter<boolean> = new EventEmitter<boolean>();

  public readonly formOptions: any | null = { standalone: true };
  public inputError: string | null = null;
  public trackingCode: string | null = null;
  public trackingCodeValueSet: boolean = false;

  public searchTrackingCode(): void {
    if (!this.trackingCode) {
      this.inputError = 'Please enter a valid waybill number';
      return;
    } else {
      this.loadingStateUpdated.emit(true);
      this.inputError = null;
      this.trackingCodeValueSet = true;
      this.loadingStateUpdated.emit(false);
    }
  }
}
