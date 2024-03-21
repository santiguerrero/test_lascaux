import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from '../shared/components/layout-main/layout-main.component';
import { ManagementFilmsComponent } from './components/management-films/management-films.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      {
        path: 'app',
        component: ManagementFilmsComponent
      },

      {
        path: 'login',
        component: LoginComponent
      },

      {path: '**', redirectTo: 'dashboard'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkerRoutingModule { }
