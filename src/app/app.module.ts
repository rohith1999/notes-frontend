import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteTypeComponent } from './note-type/note-type.component';
import { PageNFoundComponent } from './page-n-found/page-n-found.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { QnoteFeaturesComponent } from './qnote-features/qnote-features.component';
import { QnoteCardComponent } from './qnote-card/qnote-card.component';

//clipboard
import {ClipboardModule} from '@angular/cdk/clipboard';
import { BlockCopyDirective } from './note-type/block-copy.directive';


@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  declarations: [
    AppComponent,
    NoteTypeComponent,
    PageNFoundComponent,
    HomeComponent,
    QnoteFeaturesComponent,
    QnoteCardComponent,
    BlockCopyDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
