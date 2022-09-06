import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
// import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // total$: Observable<number>;

  // constructor(private cartService: CartService) {
  //   this.total$ = this.cartService.cart$.pipe(
  //     map((products) => {
  //       return products.length;
  //     })
  //   );
  // }

  ngOnInit(): void {}
}
