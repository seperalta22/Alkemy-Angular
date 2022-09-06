import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from 'src/app/models/user.interface';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { IAuthRes } from '../../models/auth-res.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = environment.loginUrl;
  private _user!: IUser;

  constructor(private http: HttpClient, private router: Router) {}

  userLogin({ email, password }: IUser) {
    const body = { email, password };

    return this.http
      .post<IAuthRes>(
        `${this.loginUrl}?email=${email}&password=${password}`,
        body
      )
      .pipe(
        tap((resp) => {
          if (resp.token) {
            this._user = { email: email, password: password };

            localStorage.setItem('token', resp.token);
          }
          if (resp.error) {
            console.log(resp.error);
          }
        }),
        // map((resp) => resp.token),
        // catchError((err) => of(err.error.error)),
        shareReplay()
      );

    // map((response: IAuthRes) => {
    //   localStorage.setItem('token', response.token!);
    //  })
    // shareReplay()
  }

  userRegister(user: IUser) {
    return this.http.post<IUser>(`${environment.loginUrl}`, user);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  userLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  get user() {
    return { ...this._user };
  }
}
