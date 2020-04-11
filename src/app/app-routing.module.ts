import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepgComponent } from './homepg/homepg.component';
 import { FindplaceComponent } from './findplace/findplace.component';
import { ItinerariesComponent } from './itineraries/itineraries.component';
import { UserItinerariesComponent } from './useritineraries/useritineraries.component';

const routes: Routes = [
  {path:'',redirectTo: 'homepg', pathMatch:'full'},
  {path:'homepg', component: HomepgComponent},
  {path:'findplace', component: FindplaceComponent},
  {path:'itineraries', component: ItinerariesComponent},
  {path:'useritineraries', component: UserItinerariesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
