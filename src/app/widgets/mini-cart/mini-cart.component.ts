import { Component, OnInit } from '@angular/core';
import { CartItem, SharedService } from '../shared.service';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss'],
})
export class MiniCartComponent implements OnInit {
  isOpened = false;
  cart: CartItem[] = [];
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.currentCart.subscribe(
      (cart: CartItem[]) => (this.cart = cart)
    );
  }

  get totalQuantity(): number {
    let totalQuantity = 0;
    this.cart.forEach((cartItem: CartItem) => {
      totalQuantity += cartItem.quantity;
    });
    return totalQuantity;
  }
}
