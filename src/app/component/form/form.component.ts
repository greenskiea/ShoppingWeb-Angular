import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from 'src/app/model/item.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input()
  listItems: Item[] = [];
  @Output() onAddItem = new EventEmitter<Item>();

  myForm: FormGroup = new FormGroup({});
  name: FormControl = new FormControl('');
  price: FormControl = new FormControl(0);
  quantity: FormControl = new FormControl(0);
  image: FormControl = new FormControl('');

  constructor() {
    this.myForm.addControl('name', this.name);
    this.myForm.addControl('price', this.price);
    this.myForm.addControl('quantity', this.quantity);
    this.myForm.addControl('image', this.image);
  }

  submit() {
    let newItem: Item = {
      id: new Date().getTime().toString(),
      name: this.name.value!,
      price: this.price.value!,
      quantity: this.quantity.value!,
      image: this.image.value ?? '',
    };
    this.onAddItem.emit(newItem);
  }

  ngOnInit(): void {
    console.log(this.listItems.length != 0 ? this.listItems : 'ko data');
  }
}
