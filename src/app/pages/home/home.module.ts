import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GioHangComponent } from 'src/app/component/gio-hang/gio-hang.component';
import { ItemCardComponent } from 'src/app/component/item-card/item-card.component';
import { NavparComponent } from 'src/app/component/navpar/navpar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BootstrapModule } from 'src/app/shared/bootstrap/bootstrap.module';
import { CoreModule } from 'src/app/shared/core/core.module';

@NgModule({
  declarations: [
    HomeComponent,
    NavparComponent,
    ItemCardComponent,
    GioHangComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    BootstrapModule,
    CoreModule,
  ],
})
export class HomeModule {}
