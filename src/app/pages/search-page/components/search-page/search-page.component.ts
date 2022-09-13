import { Component, OnInit } from '@angular/core';
import { ApiDishesService } from '../../../../core/services/api-dishes.service';
import { Router } from '@angular/router';
import { IDish } from '../../../../models/Dish.interface';
import { Validators, FormControl } from '@angular/forms';
import { MenuService } from '../../../../core/services/menu.service';
import { debounceTime, Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  term = new FormControl('', [Validators.minLength(3)]);
  search!: IDish[];
  showDishes: any;
  debouncer: Subject<string> = new Subject();

  constructor(
    private apiDishesService: ApiDishesService,
    private menuService: MenuService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe(() => {
      this.searchDishes();
    });
  }

  keyUp() {
    this.debouncer.next(this.term.value!);
  }

  searchDishes() {
    if (this.term.valid) {
      this.apiDishesService
        .getRecipes(this.term.value!)
        .subscribe((response) => {
          this.search = response;
          console.log(this.search);
        });
    }
  }

  addDish(dish: IDish) {
    if (dish.vegan && this.menuService.vegan < 2) {
      this.menuService.addDish(dish);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `gran elección! ${dish.title} fue agregado a tu menú`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (!dish.vegan && this.menuService.noVegan < 2) {
      this.menuService.addDish(dish);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `gran elección!${dish.title} fue agregado a tu menú`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No puedes agregar más de 2 platos veganos y 2 platos no veganos al menu',
      });
    }
  }

  details(id: any) {
    this.route.navigate([`/detalle/${id}`]);
  }

  get VeganLength() {
    return this.menuService.vegan;
  }

  get NoVeganLength() {
    return this.menuService.noVegan;
  }
}
