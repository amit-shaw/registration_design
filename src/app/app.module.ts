import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { NavFirstComponent } from './nav-first/nav-first.component';
import { NavSecondComponent } from './nav-second/nav-second.component';


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    NavFirstComponent,
    NavSecondComponent
  ],
  imports: [
    BrowserModule,
    
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
