import { Component, OnInit, DoCheck } from '@angular/core';
// import { CartService } from '../../../core/services/cart.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  token!: boolean;

  // total$: Observable<number>;

  // constructor(private cartService: CartService) {
  //   this.total$ = this.cartService.cart$.pipe(
  //     map((products) => {
  //       return products.length;
  //     })
  //   );
  // }

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.userLogout();
  }

  get user() {
    return this.authService.user;
  }

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.token = this.authService.isLoggedIn();
  }
}
