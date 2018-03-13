import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css']
})
export class GrandChildComponent{

  name:string;

  @Output() messageEvent=new EventEmitter<string>();
  sendMessage(){
    this.messageEvent.emit(this.name);
  }

  printName(){
    console.log(this.name);
  }

}
