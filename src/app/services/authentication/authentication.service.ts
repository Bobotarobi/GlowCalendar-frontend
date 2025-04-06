import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { url } from '../../app.api';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
  ) {
  }

  authenticate(email: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.post<void>(url + '/authenticate', {
        email: email,
        password: password
      })
        .subscribe({
          next: (response: void) => {
            resolve();
          },
          error: (error) => {
            reject(error);
          }
        });
    });
  }

  logout() : Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.delete(url + 'authenticate/logout', {}).subscribe({
        next: () => {
          resolve();
        },
        error: (error) => {
          reject(error);
        }
      })
    });
  }
}
