import { Component } from '@angular/core';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  number = 200
  color : string = "lightskyblue"
  show : boolean = true;
}
