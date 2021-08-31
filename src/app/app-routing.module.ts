import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomePageComponent} from './pages/home-page/home-page.component';
import{ContactPageComponent} from './pages/contact-page/contact-page.component';
import{RegisterPageComponent} from './pages/register-page/register-page.component';
import{LoginPageComponent} from './pages/login-page/login-page.component';

const routes: Routes = [
  {path:"home", component:HomePageComponent},
  {path:"contact-page", component:ContactPageComponent},
  {path:"login-page", component:LoginPageComponent},
  {path:"register-page", component:RegisterPageComponent},
  {path:"**", redirectTo:"home"}
];
// path:"**" Es para si no hay direccion (localhost:4200) que redirija a home
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
