import { Component, ElementRef, ViewChild } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { StoreService } from 'src/app/services/store.service';

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

  constructor(private StoreService: StoreService) {}

  ngOnInit(): void {
    this.getItem();
  }

  showDialog() {
    console.log(this.cartElement);
    this.cartElement?.nativeElement.showModal();
  }

  closeDialog() {
    this.cartElement?.nativeElement.close();
  }

  getItem() {
    this.StoreService.getItem().then((items) => {
      this.listItems = items;
      console.log(this.listItems);
    });
  }

  addCart(item: any) {
    this.StoreService.addCart(item);
    console.log(this.StoreService.cart);
  }

  handelAddItem(item: Item) {
    this.StoreService.addItem(item).then((StatusMessage) => {
      console.log(StatusMessage);
      this.getItem();
    });
  }
}
