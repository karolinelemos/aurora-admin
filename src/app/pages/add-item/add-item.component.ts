import { UnidadeMedida, Items } from './../../components/items/item';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../components/items/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  pageTitle: string = "Novo item";
  unidadeMedida = [
        {label: 'Litro', value: 1}, 
        {label: 'Quilograma', value: 2},
        {label: 'Unidade', value: 3}];
  item = new Items(null, null, null, null, null, false, null, null);

  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['id'])
      {
        this.itemService.getItembyId(params['id']).subscribe(
          item => {
            this.item = item;
            this.pageTitle = `Editar item: ${item.itemId} - ${item.nome}`;
          }
        )
      }
    });
  }

}
