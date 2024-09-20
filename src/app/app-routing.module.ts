import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Accueil/home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  
  {
    path:'',
    component:AppComponent
  },

  {
    path:'home',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
