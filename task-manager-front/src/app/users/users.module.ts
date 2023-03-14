import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserAddComponent } from './components/user-add/user-add.component';
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

@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
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
    NzTableModule
  ]
})
export class UsersModule { }
