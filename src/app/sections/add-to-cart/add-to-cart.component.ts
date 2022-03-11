import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/widgets/shared.service';
import { Size } from 'src/app/widgets/size-selector/size-selector.component';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent implements OnInit {
  teeName = '';
  price = 0;
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.teeName = this.sharedService.teeName;
    this.price = this.sharedService.price;
  }

  onSizeSelectorFormSubmit(size: Size) {
    if (size) {
      this.sharedService.addItem(size);
    }
  }
}
