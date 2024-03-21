import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:''  /*può essere direttemante [app / home / index] */,
    children: [
      {
        path: 'films',
        loadChildren: () => import('./films/films.module').then(m => m.FilmsModule),
      },

      {
        path: 'worker',
        loadChildren: () => import('./worker/worker.module').then(m => m.WorkerModule),
      },



      {
        path: '**',
        redirectTo: 'films'
      },
    ]
  },
  {path: '**', redirectTo: 'films'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
