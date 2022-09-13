import { Component, DoCheck } from '@angular/core';
import { MenuService } from '../../../../core/services/menu.service';
import { IDish } from '../../../../models/Dish.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements DoCheck {
  menu!: IDish[];

  constructor(private menuService: MenuService) {}

  get savedDishes(): IDish[] {
    return this.menuService.getLocalStorage();
  }

  get totalDishes(): number {
    let total: number = 0;
    for (let price of this.savedDishes) {
      total += price.pricePerServing;
    }
    return total;
  }

  get averageTime(): number {
    const sum = this.savedDishes.reduce((sum, dish) => {
      return sum + dish.readyInMinutes!;
    }, 0);
    let dishes = this.savedDishes.length;
    return dishes > 0 ? sum / dishes : dishes;
  }

  get averageScore(): number {
    const sum = this.savedDishes.reduce((sum, dish) => {
      return sum + dish.healthScore;
    }, 0);
    let dishes = this.savedDishes.length;
    return dishes > 0 ? sum / dishes : dishes;
  }

  ngDoCheck(): void {
    this.menu = this.menuService.Menu;
  }

  borrar(dish: IDish) {
    this.menuService.deleteDish(dish);
  }
}
