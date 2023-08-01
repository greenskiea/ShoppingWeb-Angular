import { Component, ElementRef, ViewChild } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { StoreService } from 'src/app/services/store.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('cartElement') cartElement:
    | ElementRef<HTMLDialogElement>
    | undefined;
  title = 'StoreWeb';
  openDialog = false;
  cart: Item[] = [];
  listItems: Item[] = [];

  constructor(
    public storeService: StoreService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getItem();
    this.cart = this.storeService.cart;
  }

  showDialog() {
    console.log(this.cartElement);
    this.cartElement?.nativeElement.showModal();
  }

  closeDialog() {
    this.cartElement?.nativeElement.close();
  }

  getItem() {
    this.storeService.getItems().then((items) => {
      this.listItems = items;
      console.log(this.listItems);
    });
  }

  async deleteItem(item: Item) {
    this.storeService.deleteItem(item.id).then((StatusMessage) => {
      console.log(StatusMessage);
      this.getItem();
    });
  }

  async updateItem(item: Item) {
    this.storeService
      .updateItem(item.id, item.name, item.price, item.quantity, item.image)
      .then((StatusMessage) => {
        console.log(StatusMessage);
        this.getItem();
      });
  }

  onAddCart(item: any) {
    this.storeService.addCart(item);
  }

  onIncrease(item: any) {
    this.storeService.increaseItem(item);
  }

  onDecrease(item: any) {
    this.storeService.descreaseItem(item);
  }

  handelAddItem(item: Item) {
    this.storeService.addItem(item).then((StatusMessage) => {
      console.log(StatusMessage);
      this.getItem();
    });
  }

  onPay() {
    this.storeService.pay();
  }
}
