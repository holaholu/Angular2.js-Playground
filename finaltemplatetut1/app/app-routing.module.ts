
import { NgModule }      from '@angular/core';
import { RouterModule,Routes }      from '@angular/router';
import { employeeListComponent }   from './employee-list.component';
import { employeeDetailComponent }   from './employee-detail.component';
import { NewDetailComponent }   from './new-detail.component';
import {HomeComponent }   from './home.component';
import {PageNotFoundComponent}   from './page-not-found.component';

const routes: Routes = [
    ]
   
@NgModule({
imports: [
    RouterModule.forRoot(routes)
],
exports: [
    RouterModule
]

})

export class AppRoutingModule{}
export const routingComponents=[]
   
 