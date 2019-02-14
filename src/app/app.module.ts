import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button';
import {SliderModule} from 'primeng/slider';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ToolbarModule} from 'primeng/toolbar';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ChartModule} from 'primeng/chart';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    // primeng
    ButtonModule,
    SliderModule,
    RadioButtonModule,
    ToolbarModule,
    CardModule,
    DropdownModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
