import { Component,ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {
  empname='Employee Name';
  @ViewChild('inputcls',{static:true})inputcls:ElementRef;

  inputstr:string='Mobius Knowledge Services';
  constructor(){
    console.log(this.inputstr.match(/[aeiou]/g));
  }

  ngAfterViewInit(){
    this.inputcls.nativeElement.class = 'ssss';
    console.log();
  }
  fromchild(event){
    this.empname=event;
  }
}
