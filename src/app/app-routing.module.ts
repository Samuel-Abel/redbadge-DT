import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepgComponent } from './homepg/homepg.component';
import { FindplaceComponent } from './findplace/findplace.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent  } from './footer/footer.component';
import { HmgridComponent } from './hmgrid/hmgrid.component';

const routes: Routes = [
  {path:'',redirectTo: 'homepg', pathMatch:'full'},
  {path:'homepg', component: HomepgComponent},
  {path:'findplace', component: FindplaceComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'hmgrid', component: HmgridComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
