import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemsListComponent } from './pages/items-list/items-list.component';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { MenuComponent } from './components/menu/menu.component';
import { ItemsComponent } from './components/items/items.component';


import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {DataViewModule} from 'primeng/dataview';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import {FieldsetModule} from 'primeng/fieldset';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsListComponent,
    MenuComponent,
    AddItemComponent,
    ItemsComponent,
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule, 
    HttpClientModule, 
    ToolbarModule,
    ButtonModule,
    MenuModule,
    DataViewModule,
    CheckboxModule,
    InputTextModule,
    FieldsetModule,
    DropdownModule,
    CalendarModule,
    RouterModule.forRoot([
      {path: '', component: ItemsListComponent},
      {path: 'add-item', component: AddItemComponent},
      {path: 'add-item/:id', component: AddItemComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
