import { Component, ElementRef, ViewChild } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent {
  @ViewChild('cartElement') cartElement:
    | ElementRef<HTMLDialogElement>
    | undefined;
  title = 'StoreWeb';
  openDialog = false;
  cart: Item[] = [];
  listItems: Item[] = [];

  constructor(private StoreService: StoreService) {}

  handelAddItem(item: Item) {
    this.StoreService.addItem(item).then((StatusMessage) => {
      console.log(StatusMessage);
    });
  }
}
