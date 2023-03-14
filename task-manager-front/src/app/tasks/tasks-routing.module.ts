import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTasksComponent } from './form-tasks/form-tasks.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tasks-list'
  },
  { path: 'tasks-list', component: ListTasksComponent },
  { path: 'add-tasks', component: FormTasksComponent },
  { path: 'edit-tasks/:id', component: FormTasksComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
