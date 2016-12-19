import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { UserComponent }  from './user.component';
import { ItemComponent }  from './item.component';
import { About }  from './about.component';
import { routing }  from './app.routing';


@NgModule({
  imports:      [ BrowserModule,FormsModule ,routing,HttpModule],
  declarations: [ AppComponent,UserComponent,About,ItemComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
