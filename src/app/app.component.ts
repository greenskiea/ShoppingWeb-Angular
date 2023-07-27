import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Item } from './model/item.model';

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

  listItems: Item[] = [
    {
      id: 1,
      name: 'Trà Vị Đào Tearoma 14x14g',
      price: 32.0,
      quantity: 3,
      image:
        'https://product.hstatic.net/1000075078/product/1669706771_bg-tradao-min_023afa26f3e943199fc468cc916ef936_large.jpg',
    },
    {
      id: 2,
      name: 'Trà Sữa Trân Châu Tearoma 250g',
      price: 38.0,
      quantity: 3,
      image:
        'https://product.hstatic.net/1000075078/product/1669880647_bg-trasua-min_5f01ce93b1684d4e86010988be8559f4_large.jpg',
    },
    {
      id: 3,
      name: 'Trà Vị Tắc Mật Ong Tearoma 14x14g',
      price: 32.0,
      quantity: 3,
      image:
        'https://product.hstatic.net/1000075078/product/1669706748_bg-tratatmatong-min_cbb8a839f404459d8efba52f566d79c9_large.jpg',
    },
    {
      id: 4,
      name: 'Trà Oolong Túi Lọc Tearoma 20x2G',
      price: 28.0,
      quantity: 3,
      image:
        'https://product.hstatic.net/1000075078/product/1639646968_tra-oolong-tui-loc-tearoma-20x2gr_d835290c7eed46cd860764777adc55d5_large.jpg',
    },
    {
      id: 5,
      name: 'Trà Lài Túi Lọc Tearoma 20x2G',
      price: 28.0,
      quantity: 3,
      image:
        'https://product.hstatic.net/1000075078/product/1639648068_tra-sen-tui-loc-tearoma-20x2gr_af088d6bf1934ef482a1da313a798ea0_large.jpg',
    },
    {
      id: 6,
      name: 'Trà Đào Túi Lọc Tearoma 20x2G',
      price: 28.0,
      quantity: 3,
      image:
        'https://product.hstatic.net/1000075078/product/1639646846_tra-dao-tui-loc-tearoma-20x2gr_0a91c5a70f4345218d731ef5328bc120_large.jpg',
    },
    {
      id: 7,
      name: 'Giftset Trà Tearoma',
      price: 166.0,
      quantity: 3,
      image:
        'https://product.hstatic.net/1000075078/product/1641440575_gift-set-tearoma-1_81a5aff3a4814cb786c61cbeeccfd71f_large.jpeg',
    },
  ];

  check() {
    console.log(this.listItems);
  }

  addCart(item: any) {
    let index = this.cart.findIndex((x) => x.id == item.id);
    if (index != -1) {
      this.cart[index].quantity += 1;
      return;
    }
    this.cart.push({ ...item, quantity: 1 });
  }

  showDialog() {
    console.log(this.cartElement);
    this.cartElement?.nativeElement.showModal();
  }

  closeDialog() {
    this.cartElement?.nativeElement.close();
  }
}
