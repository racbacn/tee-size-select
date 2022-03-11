import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Size } from './size-selector/size-selector.component';

export interface CartItem {
  imageSource: string;
  name: string;
  quantity: number;
  price: number;
  size: Size;
}

interface SizeCounter {
  s: CartItem;
  m: CartItem;
  l: CartItem;
}

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  teeName = 'Classic Tee';
  price = 75;
  sizeCounter: SizeCounter = {
    s: {
      imageSource: 'classic-tee.jpg',
      name: this.teeName,
      quantity: 0,
      price: this.price,
      size: 's',
    },
    m: {
      imageSource: 'classic-tee.jpg',
      name: this.teeName,
      quantity: 0,
      price: this.price,
      size: 'm',
    },
    l: {
      imageSource: 'classic-tee.jpg',
      name: this.teeName,
      quantity: 0,
      price: this.price,
      size: 'l',
    },
  };
  cart: CartItem[] = [];
  private cartSource = new BehaviorSubject<CartItem[]>([]);
  currentCart = this.cartSource.asObservable();

  constructor() {}

  addItem(size: Size) {
    const changedSizeCounter = this.sizeCounter[size];
    changedSizeCounter.quantity = changedSizeCounter.quantity + 1;
    const isInCartAlready = this.cart.find(
      (cartItem: CartItem) => cartItem.size === changedSizeCounter.size
    );
    if (!isInCartAlready) {
      this.cart.push(changedSizeCounter);
    } else {
      this.cart = this.cart.map((cartItem: CartItem) => {
        if (cartItem.size === changedSizeCounter.size) {
          cartItem.quantity = changedSizeCounter.quantity;
        }
        return cartItem;
      });
    }
    this.cartSource.next(this.cart);
  }
}
