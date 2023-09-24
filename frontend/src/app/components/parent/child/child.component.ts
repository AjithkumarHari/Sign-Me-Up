import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  childData: string = '';
  @Output() outputEvent = new EventEmitter<string>()
  onClick(){
     console.log(this.childData);
     this.outputEvent.emit(this.childData)
  }
}
