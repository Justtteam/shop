import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {MainComponent} from "./main/main.component";
import {ProductsByCategoriesComponent} from "./products-by-categories/products-by-categories.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration',component: RegistrationComponent},
  {path : 'topics/:id',component: ProductsByCategoriesComponent},
  { path: '', component: MainComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
