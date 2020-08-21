import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GipencComponent } from './gipenc/gipenc.component';
import { GipbusComponent } from './gipbus/gipbus.component';
import { GipimgComponent } from './gipimg/gipimg.component';

@NgModule({
  declarations: [
    AppComponent,
    GipencComponent,
    GipbusComponent,
    GipimgComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
