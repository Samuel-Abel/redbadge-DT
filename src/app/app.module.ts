import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepgComponent } from './homepg/homepg.component';
<<<<<<< HEAD
import { MainNavComponent } from './main-nav/main-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FindplaceComponent } from './findplace/findplace.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input'
import { AgmCoreModule } from '@agm/core';
>>>>>>> origin/cwampler

@NgModule({
  declarations: [
    AppComponent,
    HomepgComponent,
<<<<<<< HEAD
    MainNavComponent
=======
    LoginComponent,
    FindplaceComponent
>>>>>>> origin/cwampler
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
=======
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAVOiIQKnLWfWrYJVdjYyKHmnTEcg4K1_Q',
      libraries: ['places']
    })
>>>>>>> origin/cwampler
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


