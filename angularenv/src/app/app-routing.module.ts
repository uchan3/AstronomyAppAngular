import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: "", 
    component: HomeComponent  
  }, 
  {
    path: "catalog", 
    component: CatalogueComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
