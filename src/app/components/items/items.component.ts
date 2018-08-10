import { Component, Input } from '@angular/core';
import { IItems } from '../../components/items/item';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
  @Input() items: IItems[] = [];
  @Input() headerItems: Object = {};
}
