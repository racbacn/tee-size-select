import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

const COMPONENTS = [AddToCartComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
  exports: COMPONENTS,
})
export class SectionsModule {}
