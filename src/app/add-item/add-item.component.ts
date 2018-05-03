import { Component, OnInit } from '@angular/core';
import { ItemService } from './../core/item.service';
import { Item } from './../models/Item';



@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  item: Item = {
    title:'',
    description:''
  }

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  onSubmit()
  {
    if((this.item.title) != '' && (this.item.description) != '')
    {
      this.itemService.addItem(this.item);
      this.item.title='';
      this.item.description='';
    }
  }
}
