import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoysComponent } from './boys/boys.component';
import { GirlsComponent } from './girls/girls.component';
import { InfantsComponent } from './infants/infants.component';
import { KidsApparelComponent } from './kids-apparel/kids-apparel.component';
import { KidsComponent } from './kids/kids.component';
import { MenEthnicComponent } from './men-ethnic/men-ethnic.component';
import { MenJeansComponent } from './men-jeans/men-jeans.component';
import { MenTshirtsComponent } from './men-tshirts/men-tshirts.component';
import { MenComponent } from './men/men.component';
import { ShoppingComponent } from './shopping.component';
import { WomenEthnicComponent } from './women-ethnic/women-ethnic.component';
import { WomenJeansComponent } from './women-jeans/women-jeans.component';
import { WomenTshirtsComponent } from './women-tshirts/women-tshirts.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [{ path: '', component: ShoppingComponent },
{path:'women',component:WomenComponent},
{path:'men',component:MenComponent},
{path:'kids',component:KidsComponent},
{path:'women_tshirts',component:WomenTshirtsComponent},
{path:'men_tshirts',component:MenTshirtsComponent},
{path:'kids_apparel',component:KidsApparelComponent},
{path:'women_jeans',component:WomenJeansComponent},
{path:'women_ethnic',component:WomenEthnicComponent},
{path:'men_ethnic',component:MenEthnicComponent},
{path:'men_jeans',component:MenJeansComponent},
{path:'girls',component:GirlsComponent},
{path:'boys',component:BoysComponent},
{path:'infants',component:InfantsComponent}
]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
