import { Component, OnInit } from '@angular/core';
import { IItems } from '../../components/items/item';
import { ItemService } from '../../components/items/item.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  errorMessage: string;
  items: IItems[] = [];
  headerItems: object = 
      [{"label": "Nome", "class": "ui-g-3"},
      {"label": "Preço", "class": "ui-g-1"},
      {"label": "Quantidade", "class": "ui-g-2"},
      {"label": "Perecível", "class": "ui-g-1"},
      {"label": "Data de Validade", "class": "ui-g-2"},
      {"label": "Data de Fabricação", "class": "ui-g-2"},
      {"label": "", "class": "ui-g-1"}];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(
      items => this.items = items,
      error => this.errorMessage = <any>error
    )
  }
}
