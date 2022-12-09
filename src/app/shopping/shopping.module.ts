import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './shopping.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { KidsComponent } from './kids/kids.component';
import { WomenTshirtsComponent } from './women-tshirts/women-tshirts.component';
import { MenTshirtsComponent } from './men-tshirts/men-tshirts.component';
import { KidsApparelComponent } from './kids-apparel/kids-apparel.component';
import { WomenJeansComponent } from './women-jeans/women-jeans.component';
import { MenJeansComponent } from './men-jeans/men-jeans.component';
import { GirlsComponent } from './girls/girls.component';
import { BoysComponent } from './boys/boys.component';
import { InfantsComponent } from './infants/infants.component';
import { WomenEthnicComponent } from './women-ethnic/women-ethnic.component';
import { MenEthnicComponent } from './men-ethnic/men-ethnic.component';


@NgModule({
  declarations: [
    ShoppingComponent,
    WomenComponent,
    MenComponent,
    KidsComponent,
    WomenTshirtsComponent,
    MenTshirtsComponent,
    KidsApparelComponent,
    WomenJeansComponent,
    MenJeansComponent,
    GirlsComponent,
    BoysComponent,
    InfantsComponent,
    WomenEthnicComponent,
    MenEthnicComponent
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
