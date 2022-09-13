import { IDish } from './Dish.interface';

export interface IApiResponse {
  results: IDish[];
  offset: number;
  number: number;
  totalResults: number;
}
