import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepgComponent } from './homepg/homepg.component';
 import { FindplaceComponent } from './findplace/findplace.component';

const routes: Routes = [
  {path:'',redirectTo: 'homepg', pathMatch:'full'},
  {path:'homepg', component: HomepgComponent},
  {path:'findplace', component: FindplaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
