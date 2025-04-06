import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterRequest} from './requests/register.request';
import { url } from './../../../app/app.api';
import {RegisterResponse} from "./response/register.response";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
  ) { }

  register(email: string, code: string, password: string): Promise<void | RegisterResponse> {
    return new Promise((resolve, reject) => {
        this.http.post(url + '/authentication/register', {
          email,
          code,
          password,
        }).subscribe({
          next: (): void => {
            resolve();
          },
          error: (response: RegisterResponse) => {
            reject(response);
          }
        })
    })
  }
}
