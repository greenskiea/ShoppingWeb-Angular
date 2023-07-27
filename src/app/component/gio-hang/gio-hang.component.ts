import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/model/item.model';

@Component({
  selector: 'app-gio-hang',
  templateUrl: './gio-hang.component.html',
  styleUrls: ['./gio-hang.component.scss'],
})
export class GioHangComponent {
  @Input() ItemCart: Item[] = [];
  @Output() onCloseCart = new EventEmitter();

  closeCart() {
    this.onCloseCart.emit();
  }

  total() {
    let tempTotal = 0;
    for (let i = 0; i < this.ItemCart.length; i++) {
      tempTotal += this.ItemCart[i].price * this.ItemCart[i].quantity;
    }
    alert(`Tổng tiền là: ${tempTotal}.000 đ`);
  }
}
