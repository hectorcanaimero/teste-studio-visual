import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTE } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
