import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {
    path:"home",
    loadChildren: () => import('./home/home.module')  
   .then(m => m.HomeModule)
  },
  {
    path:"dashboard",
    loadChildren: () => import('./dashboard/dashboard.module')  
   .then(m => m.DashboardModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
