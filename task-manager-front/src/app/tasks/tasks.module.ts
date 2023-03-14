import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { FormTasksComponent } from './form-tasks/form-tasks.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import {DatePipe} from '@angular/common';
import { AssignTasksComponent } from './assign-tasks/assign-tasks.component';

@NgModule({
  declarations: [
    FormTasksComponent,
    ListTasksComponent,
    AssignTasksComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    CommonModule,
    NzLayoutModule,
    NzFormModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NzInputModule,
    RouterModule,
    NzButtonModule,
    NzIconModule,
    NzGridModule,
    NzSelectModule,
    NzInputNumberModule,
    NzDatePickerModule,
    NzModalModule,
    NzTableModule,
  ], providers:[ DatePipe]
})
export class TasksModule { }
