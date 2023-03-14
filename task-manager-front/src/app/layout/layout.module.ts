import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@NgModule({
  declarations: [
    NavbarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzLayoutModule,
    NzBreadCrumbModule
  ]
})
export class LayoutModule { }
