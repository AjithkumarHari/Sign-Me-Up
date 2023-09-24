import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  inputData : string = ''
  onChildData(input : string){
    this.inputData = input
  }
}
