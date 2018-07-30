import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemsListComponent } from './pages/items-list/items-list.component';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { MenuComponent } from './menu/menu.component';

import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsListComponent,
    MenuComponent,
    AddItemComponent,
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule, 
    HttpClientModule, 
    ToolbarModule,
    ButtonModule,
    MenuModule,
    RouterModule.forRoot([
      {path: '', component: ItemsListComponent},
      {path: 'add-item', component: AddItemComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
