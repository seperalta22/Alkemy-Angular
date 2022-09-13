import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IDish } from '../../models/Dish.interface';
import { Observable, map } from 'rxjs';
import { IApiResponse } from '../../models/api-response.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiDishesService {
  private apiUrl: string = 'https://api.spoonacular.com/';
  private apiKey: string = environment.apiKey;

  constructor(private http: HttpClient) {}

  getRecipes(query: string): Observable<IDish[]> {
    return this.http
      .get<IApiResponse>(
        `${this.apiUrl}recipes/complexSearch?query=${query}&apiKey=${this.apiKey}&addRecipeInformation=true&number=12`
      )
      .pipe(
        map((response) => {
          return response.results;
        })
      );
  }

  // getVeganRecipes() {
  //   return this.http.get(
  //     `${this.apiUrl}recipes/search?apiKey='${this.apiKey}'&type=vegan&number=12`
  //   );
  // }
}
