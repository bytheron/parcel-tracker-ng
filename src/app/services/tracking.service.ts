import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const EXTERNAL_API = 'https://api.staging.pargo.co.za';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor(private readonly _httpClient: HttpClient) { }

  public trackWayBillNumber(waybillNumber: string): Observable<any> {
    return this._httpClient.get(`${EXTERNAL_API}/events/orders/${waybillNumber}`);
  }
}
