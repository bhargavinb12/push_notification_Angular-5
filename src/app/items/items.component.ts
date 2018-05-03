import { Component, OnInit } from '@angular/core';
import { ItemService } from './../core/item.service';
import { Item } from './../models/item';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;
  userUid = localStorage.getItem("userUid"); 
  username =localStorage.getItem("username");
  constructor(private itemService: ItemService ,   public afAuth: AngularFireAuth  ) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
          console.log(items);
      this.items=items;
    });
  }
  deleteItem(event, item: Item)
  {
    this.clearState();
    this.itemService.deleteItem(item);
  }
  editItem(event, item: Item)
  {
    this.editState=true;
    this.itemToEdit = item;
  }

  updateItem(item: Item){
    this.itemService.updateItem(item);
    this.clearState();
  }

  clearState()
  {
    this.editState=false;
    this.itemToEdit= null;
  }

}
