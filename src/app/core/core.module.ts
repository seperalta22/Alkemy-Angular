import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { ApiDishesService } from './services/api-dishes.service';
import { MenuService } from './services/menu.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AuthService, ApiDishesService, MenuService],
})
export class CoreModule {}
