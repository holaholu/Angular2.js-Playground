import {Component} from '@angular/core';


@Component({
    selector:"my-tutorial",
    template:`<h2>{{mydate| date:'fullDate'}}<h2>
    <h2>{{mydate| date:'shortDate'}}<h2>
    `
    
              
})
export class TutorialsComponent {
    public title="Tutorials from Olaolu";
    public mydate=new Date();
    
    }
    
    
            
