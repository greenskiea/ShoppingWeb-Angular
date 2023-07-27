import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavparComponent } from './component/navpar/navpar.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './component/form/form.component';
import { MatButtonModule } from '@angular/material/button';
import { ItemCardComponent } from './component/item-card/item-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GioHangComponent } from './component/gio-hang/gio-hang.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavparComponent,
    FormComponent,
    ItemCardComponent,
    GioHangComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
