import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HealthComponent } from './assistants/health/health.component';
import { ItSupportComponent } from './assistants/it-support/it-support.component';
import { ShoppingComponent } from './assistants/shopping/shopping.component';
import { NavComponent } from './pages/nav/nav.component';
import { BodyComponent } from './pages/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HealthComponent,
    ItSupportComponent,
    ShoppingComponent,
    NavComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
