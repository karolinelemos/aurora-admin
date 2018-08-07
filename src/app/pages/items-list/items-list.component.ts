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

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(
      items => this.items = items,
      error => this.errorMessage = <any>error
    )
  }
}
