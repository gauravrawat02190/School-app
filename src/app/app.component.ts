import { Component, OnInit } from '@angular/core';
import { ProjectGridComponent } from './Student/projectgrid.component';
import { NgOnChangesFeature } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Welcome to angular';
num1:number;
num2:number;
total:number;
parenttextname="Gaurav Rawat"
ngOnInit () {
  console.log('The parent value  we are receiving here is: ' + this.parenttextname)
}

Add()
{
  this.total= this.num1+this.num2;
}
  sayHello()
  {
    alert(this.title);
  }
}
