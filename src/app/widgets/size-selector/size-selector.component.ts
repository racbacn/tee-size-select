import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export type Size = 's' | 'm' | 'l';

@Component({
  selector: 'app-size-selector',
  templateUrl: './size-selector.component.html',
  styleUrls: ['./size-selector.component.scss'],
})
export class SizeSelectorComponent {
  @Output() sizeSelectorFormSubmit = new EventEmitter<Size>();
  sizeSelectorForm = this.fb.group({
    size: this.fb.control('', Validators.required),
  });
  sizes: Size[] = ['s', 'm', 'l'];
  selectedSize!: Size;
  constructor(private fb: FormBuilder) {}

  onSizeSelect(size: Size) {
    this.selectedSize = size;
  }

  onSizeSelectorFormSubmit() {
    this.sizeSelectorFormSubmit.emit(this.selectedSize);
  }
}
