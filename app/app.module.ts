import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkComponent } from './link/link.component';
import { HeaderComponent } from './header/header.component';
import { ApplyComponent } from './apply/apply.component';
import { LoggComponent } from './logg/logg.component';
import {ServiceService} from './service.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LinkComponent,
    HeaderComponent,
    ApplyComponent,
    LoggComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
      HttpClientModule

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
