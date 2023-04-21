import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/services/authguard.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path : 'home',
        loadChildren : () => import('../home/home.module').then(m => m.HomeModule),
        canActivate : [AuthGuard],
        data : {moduleName : "Home"}
    },
    {
      path : 'login',
      component : LoginComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }