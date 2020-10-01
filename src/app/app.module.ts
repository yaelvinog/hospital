import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HEADERComponent } from './header/header.component';
import {FooterComponent}from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { OpinionComponent } from './opinion/opinion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CarouselComponent } from './carousel/carousel.component';
 import {IvyCarouselModule} from 'angular-responsive-carousel';
import { AgmCoreModule } from '@agm/core';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { DepartmentDetailsCardComponent } from './department-details-card/department-details-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HEADERComponent,
    FooterComponent,
    OpinionComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    StarRatingComponent,
    CarouselComponent,
    DepartmentDetailsCardComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    SlideshowModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTooltipModule,
    IvyCarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC-SQwC15UXZF4P4eE8kWJTJCaMoxdJMpE',libraries: ["places"]
    })
  ],
  exports:[MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

