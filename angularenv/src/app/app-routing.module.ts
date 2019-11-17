import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  {
    path: "", 
    component: HomeComponent  
  }, 
  {
    path: "catalog", 
    component: CatalogueComponent
  }, 
  {
    path: "user", 
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
