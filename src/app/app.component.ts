import { Component, NgModule } from "@angular/core";
import {FormsModule} from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { Directive } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: '/app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='app';
}
