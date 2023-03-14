import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users-list'
  },
  { path: 'users-list', component: UserListComponent },
  { path: 'add-user', component: UserAddComponent },
  { path: 'edit-user/:id', component: UserAddComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
