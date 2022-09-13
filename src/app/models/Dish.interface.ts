export interface IDish {
  id: number;
  vegan: boolean;
  title: string;
  healthScore: number;
  pricePerServing: number;
  image: string;
  glutenFree: boolean;
  preparationMinutes: number;
  cookingMinutes: number;
  readyInMinutes: number;
  summary: string;
  dairyFree: boolean;
  vegetarian: boolean;
}
