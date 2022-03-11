import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizeSelectorComponent } from './size-selector.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SizeSelectorComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SizeSelectorComponent],
})
export class SizeSelectorModule {}
