import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-gio-hang',
  templateUrl: './gio-hang.component.html',
  styleUrls: ['./gio-hang.component.scss'],
})
export class GioHangComponent {
  @Input() ItemCart: Item[] = [];
  @Output() onCloseCart = new EventEmitter();

  @Output() onIncreaseItem = new EventEmitter<Item>();
  @Output() onDecreaseItem = new EventEmitter<Item>();
  @Output() onPay = new EventEmitter();

  constructor(private StoreService: StoreService) {}

  closeCart() {
    this.onCloseCart.emit();
  }

  increaseItem(item: Item) {
    this.onIncreaseItem.emit(item);
  }

  decreaseItem(item: Item) {
    this.onDecreaseItem.emit(item);
  }

  total() {
    let tempTotal = this.StoreService.total();
    alert(`Tổng tiền là: ${tempTotal}.000 đ`);
    this.closeCart();
    this.onPay.emit();
  }
}
