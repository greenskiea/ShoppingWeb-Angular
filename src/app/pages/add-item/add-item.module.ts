import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddItemRoutingModule } from './add-item-routing.module';
import { AddItemComponent } from './add-item.component';
import { FormComponent } from 'src/app/component/form/form.component';
import { CoreModule } from 'src/app/shared/core/core.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AddItemComponent, FormComponent],
  imports: [CommonModule, AddItemRoutingModule, CoreModule, MatButtonModule],
})
export class AddItemModule {}
