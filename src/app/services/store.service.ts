import { Injectable, inject } from '@angular/core';
import { Item } from '../model/item.model';

import {
  Firestore,
  collection,
  addDoc,
  getDocs,
  collectionSnapshots,
  query,
  where,
  deleteDoc,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  listItems: Item[] = [];
  cart: Item[] = [];
  Firestore: Firestore = inject(Firestore);
  itemCollection = collection(this.Firestore, 'items');
  constructor(private fireStore: Firestore) {
    this.getData();

    // this.deleteItem('1690733116235');
    // this.updateItem('1690727704909', 10);
  }

  getData() {
    collectionSnapshots(this.itemCollection).subscribe((snapshot) => {
      let result = snapshot.map((doc) => doc.data());
      this.listItems = result as Item[];
    });
  }

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

  async getItems() {
    const itemCollection = collection(this.Firestore, 'items');
    let ItemShnapshot = await getDocs(itemCollection);
    let tempItem: Item[] = [];

    ItemShnapshot.forEach((itemQuerySnapshot) => {
      const item = itemQuerySnapshot.data() as Item;
      tempItem.push(item);
    });

    this.listItems = tempItem;

    return this.listItems;
  }

  async deleteItem(id: string) {
    let qr = query(this.itemCollection, where('id', '==', id));
    let ItemShnapshot = await getDocs(qr);
    deleteDoc(ItemShnapshot.docs[0].ref);
  }

  async updateItem(
    id: string,
    name: string,
    price: number,
    quantity: number,
    image: string
  ) {
    let qr = query(this.itemCollection, where('id', '==', id));
    let result = await getDocs(qr);
    console.log(result.docs[0].ref);
    await updateDoc(result.docs[0].ref, {
      quantity: quantity,
      name: name,
      price: price,
      image: image,
    })
      .then(() => {
        console.log(`update success ${id} ${name} ${price} ${quantity}}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  total() {
    let tempTotal = 0;
    for (let i = 0; i < this.cart.length; i++) {
      tempTotal += this.cart[i].price * this.cart[i].inCart!;
    }
    return tempTotal;
  }

  addCart(item: any) {
    if (item.quantity > 0) {
      item.quantity -= 1;
      let index = this.cart.findIndex((x) => x.id == item.id);
      if (index == -1) {
        item.inCart = 1;
        this.cart.push(item);
      } else {
        this.cart[index].inCart! += 1;
      }
    } else {
      alert('Hết hàng rồi bạn ơi');
    }
  }

  increaseItem(item: any) {
    if (item.quantity > 0) {
      item.quantity -= 1;
      let index = this.cart.findIndex((x) => x.id == item.id);
      this.cart[index].inCart! += 1;
    } else {
      alert('Hết hàng rồi bạn ơi');
    }
  }

  descreaseItem(item: any) {
    let index = this.cart.findIndex((x) => x.id == item.id);
    if (this.cart[index].inCart! > 1) {
      this.cart[index].inCart! -= 1;
    } else {
      this.cart.splice(index, 1);
    }
    item.quantity += 1;
  }
  pay() {
    console.log(this.cart);
    this.cart.forEach(async (item) => {
      item.inCart = 0;
      await this.updateItem(
        item.id,
        item.name,
        item.price,
        item.quantity,
        item.image
      );
    });
    alert('Thanh toán thành công');
    this.cart = [];
  }
}
