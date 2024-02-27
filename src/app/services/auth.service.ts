import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthObject } from '../interfaces/auth-object.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _authURI: string = 'https://api.staging.pargo.co.za/auth';
  private readonly _authObj: AuthObject = { username: 'email@example.com', password: 'password' };

  constructor(private readonly _httpClient: HttpClient) { }

  public authenticate(): Observable<any> {
    return this._httpClient.post(`${this._authURI}`, this._authObj);
  }
}
