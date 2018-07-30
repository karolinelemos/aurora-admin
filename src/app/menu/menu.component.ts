import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Gerenciar',
        items: [
          {label: 'Visualizar Itens', icon: 'pi pi-align-right', routerLink: ['']},
          {label: 'Adicionar Item', icon: 'pi pi-plus', routerLink: ['/add-item']}
        ]
      }
    ];
  }

}
