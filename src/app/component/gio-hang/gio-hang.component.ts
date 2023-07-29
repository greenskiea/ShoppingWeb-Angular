import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { ShareItemService } from 'src/app/services/share-item.service';

@Component({
  selector: 'app-gio-hang',
  templateUrl: './gio-hang.component.html',
  styleUrls: ['./gio-hang.component.scss'],
})
export class GioHangComponent {
  @Input() ItemCart: Item[] = [];
  @Output() onCloseCart = new EventEmitter();

  constructor(private shareItemService: ShareItemService) {}

  closeCart() {
    this.onCloseCart.emit();
  }

  total() {
    let tempTotal = this.shareItemService.total();
    alert(`Tổng tiền là: ${tempTotal}.000 đ`);
    this.ItemCart.splice(0, this.ItemCart.length);
    this.closeCart();
  }
}
