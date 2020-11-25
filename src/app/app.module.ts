import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { NgxRatingStarsModule } from 'ngx-rating-stars'


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgxRatingStarsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
