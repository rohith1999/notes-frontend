import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteTypeComponent } from './note-type/note-type.component';
import { PageNFoundComponent } from './page-n-found/page-n-found.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  declarations: [
    AppComponent,
    NoteTypeComponent,
    PageNFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
