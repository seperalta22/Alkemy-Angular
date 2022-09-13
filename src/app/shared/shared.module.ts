import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DishCardComponent } from './components/dish-card/dish-card.component';
import { DishDetailsComponent } from './components/dish-details/dish.details.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DishCardComponent,
    DishDetailsComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    DishCardComponent,
    DishDetailsComponent,
  ],
})
export class SharedModule {}
