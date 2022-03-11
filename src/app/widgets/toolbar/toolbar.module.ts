import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { MiniCartModule } from '../mini-cart/mini-cart.module';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [CommonModule, MiniCartModule],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
