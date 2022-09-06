import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HighlightDirective, HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule],
  exports: [HighlightDirective, HeaderComponent, FooterComponent],
})
export class SharedModule {}
