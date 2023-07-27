import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navpar',
  templateUrl: './navpar.component.html',
  styleUrls: ['./navpar.component.scss'],
})
export class NavparComponent {
  @Output() onCart = new EventEmitter();

  openCart() {
    this.onCart.emit();
  }
}
