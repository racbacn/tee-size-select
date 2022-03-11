import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { SizeSelectorModule } from '../widgets/size-selector/size-selector.module';

const COMPONENTS = [AddToCartComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, SizeSelectorModule],
  exports: COMPONENTS,
})
export class SectionsModule {}
