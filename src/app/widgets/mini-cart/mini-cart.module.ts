import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniCartComponent } from './mini-cart.component';

@NgModule({
  declarations: [MiniCartComponent],
  imports: [CommonModule],
  exports: [MiniCartComponent],
})
export class MiniCartModule {}
