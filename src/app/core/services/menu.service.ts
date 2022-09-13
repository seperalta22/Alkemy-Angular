import { Injectable } from '@angular/core';
import { IDish } from '../../models/Dish.interface';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  public menu: IDish[] = [];
  private veganLength: number = 0;
  private noVeganLength: number = 0;

  constructor() {}

  get Menu(): IDish[] {
    return [...this.menu];
  }

  get vegan(): number {
    return this.menu.filter((dish) => dish.vegan).length;
  }

  get noVegan(): number {
    return this.menu.filter((dish) => !dish.vegan).length;
  }

  addDish(dish: IDish): void {
    if (dish.vegan && this.veganLength < 2) {
      this.menu.push(dish);
      localStorage.setItem('menu', JSON.stringify(this.menu));
      console.log('vegan', this.veganLength);
    }
    if (!dish.vegan && this.noVeganLength < 2) {
      this.menu.push(dish);
      localStorage.setItem('menu', JSON.stringify(this.menu));
      console.log('noVegan', this.noVeganLength);
    }
  }

  deleteDish(dish: IDish): void {
    this.menu = this.menu.filter((d) => d.id !== dish.id);
    localStorage.setItem('menu', JSON.stringify(this.menu));
    console.log('vegan', this.veganLength);
    console.log('noVegan', this.noVeganLength);
  }

  getLocalStorage(): IDish[] {
    const menu = JSON.parse(localStorage.getItem('menu')!);
    if (menu) {
      this.menu = menu;
    }
    return this.menu;
  }
}
