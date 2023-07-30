import { Injectable, inject } from '@angular/core';
import { Item } from '../model/item.model';

import {
  Firestore,
  collection,
  addDoc,
  getDocs,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  listItems: Item[] = [];
  cart: Item[] = [];
  Firestore: Firestore = inject(Firestore);
  constructor() {}

  async addItem(item: Item): Promise<string> {
    let StatusMessage = '';
    const itemCollection = collection(this.Firestore, 'items');
    await addDoc(itemCollection, item)
      .then((docRef) => {
        StatusMessage = 'success';
      })
      .catch((error) => {
        StatusMessage = 'error' + error.message;
      });
    return StatusMessage;
  }

  async getItem() {
    const itemCollection = collection(this.Firestore, 'items');
    let ItemShnapshot = await getDocs(itemCollection);
    let tempItem: Item[] = [];

    ItemShnapshot.forEach((itemQuerySnapshot) => {
      const Item = itemQuerySnapshot.data() as Item;
      tempItem.push(Item);
    });

    this.listItems = tempItem;

    return this.listItems;
  }

  addCart(item: Item) {
    if (item.quantity == 0) {
      alert('Hết hàng');
      return;
    } else {
      item.quantity -= 1;
    }

    let index = this.cart.findIndex((x) => x.id == item.id);
    if (index != -1) {
      this.cart[index].quantity += 1;
      return;
    }
    this.cart.push({ ...item, quantity: 1 });
  }

  total() {
    let tempTotal = 0;
    for (let i = 0; i < this.cart.length; i++) {
      tempTotal += this.cart[i].price * this.cart[i].quantity;
    }
    return tempTotal;
  }
}
