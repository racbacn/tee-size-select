import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export type Size = 's' | 'm' | 'l';

@Component({
  selector: 'app-size-selector',
  templateUrl: './size-selector.component.html',
  styleUrls: ['./size-selector.component.scss'],
})
export class SizeSelectorComponent implements OnInit {
  @Output() sizeSelectorFormSubmit = new EventEmitter<Size>();
  sizeSelectorForm = this.fb.group({
    size: this.fb.control('', Validators.required),
  });
  sizes: Size[] = ['s', 'm', 'l'];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSizeSelectorFormSubmit() {
    const value: Size = this.sizeSelectorForm.value.size;
    console.log({ value });
    this.sizeSelectorFormSubmit.emit(value);
  }
}
