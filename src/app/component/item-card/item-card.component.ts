import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/model/item.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Input()
  item!: Item;

  @Output() onCart = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addCart() {
    this.onCart.emit();
  }
}
