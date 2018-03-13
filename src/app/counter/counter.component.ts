import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: '/counter.component.html',
  inputs:['parentValue']
})
export class CounterComponent {
  parentValue:string;
}
