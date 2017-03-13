import {Component} from '@angular/core';


@Component({
    selector:"my-custom",
    template:`<h2>{{title}}</h2>
              <p *ngIf="shownow">Show element</p>
              <div [ngSwitch]="color"> 
              <p *ngSwitchCase="'red'">Red is shown</p>
              <p *ngSwitchWhen="'blue'">Blue is shown</p>
              <p *ngSwitchDefault>Yellow is shown</p>
              </div>
              <ul>
              <li *ngFor="let color of colors">
              {{color}}
              </li>
              </ul>
              `
              
})
export class MyCustomComponent {
    public title="Tutorials from Olaolu";
    public shownow =true;
    public color ="red";
    public colors=["red","blue","green"]
    }
              
