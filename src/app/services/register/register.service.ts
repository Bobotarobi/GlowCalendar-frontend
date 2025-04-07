import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {RegisterResponse} from "./response/register.response";
import { url } from "./../../app.api";
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient,
  ) { }

  register(birthday: Date, firstname: string, lastname: string, role: Role) : Promise<RegisterResponse> {
    return new Promise((resolve, reject) => {
      this.http.post<RegisterResponse>(url + '/register', {
        birthday: birthday,
        firstname: firstname,
        lastname: lastname,
        role: role
      }).subscribe({
        next: (response) => {
          resolve(response);
        },
        error: (error) => {
          reject(error);
        }
      })
    })
  }

  registerCode(code: string, email: string, password: string) : Promise<RegisterResponse> {
    return new Promise((resolve, reject) => {
      this.http.post<RegisterResponse>(url + '/register/code', {
        code: code,
        email: email,
        password: password,
      }).subscribe({
        next: (response) => {
          resolve(response);
        },
        error: (error) => {
          reject(error);
        }
      })
    })
  }

  registerVerify(id: number, code: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.post<void>(url + '/register/verify', {
        verification_id: id,
        verification_code: code
      }).subscribe({
        next: (response: void) => {
          resolve();
        },
        error: (error) => {
          reject(error);
        }
      })
    })
  }
}

enum Role{
  STUDENT= 'STUDENT',
  PARENT='PARENT',
  TEACHER = 'TEACHER',
}
