import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navpar',
  templateUrl: './navpar.component.html',
  styleUrls: ['./navpar.component.scss'],
})
export class NavparComponent {
  @Output() onCart = new EventEmitter();

  constructor(public authService: AuthService) {}

  openCart() {
    this.onCart.emit();
  }
}
