import { Component, OnInit, DoCheck } from '@angular/core';
// import { CartService } from '../../../core/services/cart.service';
import { AuthService } from '../../../core/services/auth.service';
import { Observable, map } from 'rxjs';
import { MenuService } from '../../../core/services/menu.service';
import { IDish } from '../../../models/Dish.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  token!: boolean;

  total$!: number;

  constructor(
    private authService: AuthService,
    private menuService: MenuService
  ) {}

  logout() {
    this.authService.userLogout();
  }

  get user() {
    return this.authService.user;
  }

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.token = this.authService.isLoggedIn();
    const localMenu = JSON.parse(localStorage.getItem('menu') || '[]');
    this.total$ = localMenu.length;
  }
}
