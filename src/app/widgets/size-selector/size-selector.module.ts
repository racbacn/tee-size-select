import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizeSelectorComponent } from './size-selector.component';

@NgModule({
  declarations: [SizeSelectorComponent],
  imports: [CommonModule],
  exports: [SizeSelectorComponent],
})
export class SizeSelectorModule {}
