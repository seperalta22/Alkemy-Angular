import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPageRoutingModule } from './search-page-routing.module';
import { MaterialModule } from '../../material/material.module';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
  ],
})
export class SearchPageModule {}
