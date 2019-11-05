import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APODComponent } from './apod/apod.component';


const routes: Routes = [
  {
    path: "apod", 
    component: APODComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
