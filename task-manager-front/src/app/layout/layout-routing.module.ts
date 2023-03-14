import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      },
      {
        path: 'users',
        canActivate: [ AuthGuard ],
        loadChildren: () =>
          import('../users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'tasks',
        canActivate: [ AuthGuard ],
        loadChildren: () =>
          import('../tasks/tasks.module').then((m) => m.TasksModule),
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
