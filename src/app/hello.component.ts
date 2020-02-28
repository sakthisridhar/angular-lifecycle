import { Component,Input,OnChanges,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{empname}}!</h1>
  <input type="text" [(ngModel)]="parentdata"/><button (click)="senddatatoparent()">Send data to parent</button>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnChanges {
  @Input('alisename') empname:string;
  @Output() senddata:EventEmitter<any>=new EventEmitter<any>();
  parentdata="";
  ngOnChanges(changes){
    console.log(changes);
  }

  senddatatoparent(){
    this.senddata.emit(this.parentdata);
  }




}
