import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { CountryDirective } from './country.directive';

@NgModule({
  declarations: [
    AppComponent,
    CountryDirective
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
