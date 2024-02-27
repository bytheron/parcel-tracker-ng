import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TrackingService } from '../../services/tracking.service';
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
  styleUrl: './tracking.component.scss',
  providers: [TrackingService]
})
export class TrackingComponent {
  @Output()
  public loadingStateUpdated: EventEmitter<boolean> = new EventEmitter<boolean>();

  public readonly formOptions: any | null = { standalone: true };

  public inputError: string | null = null;
  public trackingCode: string | null = null;
  public trackingCodeValueSet: boolean = false;

  private readonly _staticWaybillNumber: string = 'PAR2029726154';

  constructor(private readonly _trackingService: TrackingService, private readonly _snackBar: MatSnackBar) { }

  public searchTrackingCode(): void {
    if (!this.trackingCode) {
      this.inputError = 'Please enter a valid waybill number';
    } else {
      this._trackingService.trackWayBillNumber(this._staticWaybillNumber).subscribe((res) => {
        this.inputError = null;
        this.trackingCodeValueSet = true;
      }, (err) => {
        if (err) {
          this._snackBar.open(err.message, 'Ok', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          this.inputError = 'Sorry, there was a problem fetching your order.';
        }
      });
    }
  }
}
