import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TextHighlightDirective } from './text-highlight.directive';
import { DelayDirective } from './delay.directive';

@NgModule({
  declarations: [
    AppComponent,
    TextHighlightDirective,
    DelayDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
