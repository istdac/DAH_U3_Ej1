import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'view-student',
    pathMatch: 'full'
  },
  //Usar navigation o router para navegacion entre paginas ya que set root quita pila de navegacion
  {
    path: 'view-student',
    loadChildren: () => import('./view-student/view-student.module').then( m => m.ViewStudentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
