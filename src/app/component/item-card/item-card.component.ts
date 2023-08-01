import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Input()
  item!: Item;
  @Input()
  listItems: Item[] = [];
  myForm: FormGroup = new FormGroup({});
  name: FormControl = new FormControl('');
  price: FormControl = new FormControl(0);
  quantity: FormControl = new FormControl(0);
  image: FormControl = new FormControl('');

  @Output() onCart = new EventEmitter();

  @Output() onDeleteItem = new EventEmitter();

  @Output() onUpdateItem = new EventEmitter();

  constructor(public authService: AuthService) {
    this.myForm.addControl('name', this.name);
    this.myForm.addControl('price', this.price);
    this.myForm.addControl('quantity', this.quantity);
    this.myForm.addControl('image', this.image);
  }

  ngOnInit(): void {}

  addCart() {
    this.onCart.emit(this.item);
  }

  disable = false;
  deleteItem() {
    if (!this.disable) {
      this.onDeleteItem.emit(this.item);
      this.disable = true;
    }
  }

  updateItem() {
    let itemUpdate: Item = {
      id: this.item.id,
      name: this.name.value!,
      price: this.price.value!,
      quantity: this.quantity.value!,
      image: this.image.value ?? '',
    };
    this.onUpdateItem.emit(itemUpdate);
  }

  flip = false;
  flipCard() {
    if (!this.flip) {
      this.flip = true;
      console.log(this.flip);
    }
  }
  flipBackCard() {
    if (this.flip) {
      this.flip = false;
      console.log(this.flip);
    }
  }
}
