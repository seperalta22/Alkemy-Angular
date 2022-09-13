import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from 'src/app/models/user.interface';
import { map, shareReplay } from 'rxjs/operators';
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
        map((resp) => {
          if (resp.token) {
            this._user = { email: email, password: password };
            localStorage.setItem('token', resp.token);
          }
          if (resp.error) {
            console.log(resp.error);
          }
        }),
        shareReplay(1)
      );
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
