import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Item } from './model/item.model';
import { ShareItemService } from './services/share-item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('cartElement') cartElement:
    | ElementRef<HTMLDialogElement>
    | undefined;
  title = 'StoreWeb';
  openDialog = false;
  cart: Item[] = [];
  listItems: Item[] = [];

  constructor(private shareItemService: ShareItemService) {
    this.listItems = this.shareItemService.listItems;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cart = this.shareItemService.cart;
  }

  addCart(item: any) {
    this.shareItemService.addCart(item);
    console.log(this.shareItemService.cart);
  }

  showDialog() {
    console.log(this.cartElement);
    this.cartElement?.nativeElement.showModal();
  }

  closeDialog() {
    this.cartElement?.nativeElement.close();
  }
}
