import { Component, ViewEncapsulation } from '@angular/core';
import { MessagingService } from "./messaging.service";
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  message;

  constructor(private msgService: MessagingService) {}

  ngOnInit() {
    //this.msgService.deleteToken()
    //this.msgService.getPermission()
   this.msgService.receiveMessage()
    this.message = this.msgService.currentMessage
  }

}

