import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepgComponent } from './homepg/homepg.component';


const routes: Routes = [
  {path:'',redirectTo: 'homepg', pathMatch:'full'},
  {path:'homepg', component: HomepgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
