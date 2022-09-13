import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IDish } from '../../../models/Dish.interface';
import { DishDetailsComponent } from '../dish-details/dish.details.component';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss'],
})
export class DishCardComponent {
  @Input() dish!: any;

  @Output() boton: EventEmitter<IDish> = new EventEmitter();

  addDish = !(this.route.url === '/home');

  constructor(public dialog: MatDialog, public route: Router) {}

  event() {
    this.boton.emit(this.dish);
  }

  openDialog() {
    this.dialog.open(DishDetailsComponent, {
      data: this.dish,
    });
  }
}
