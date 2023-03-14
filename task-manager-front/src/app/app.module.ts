import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzResultModule } from 'ng-zorro-antd/result';
registerLocaleData(es);
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AccountBookFill, AlertFill, AlertOutline, PlusCircleFill, MinusCircleFill, PlusOutline, MinusCircleOutline, MinusOutline, EyeInvisibleOutline, EyeOutline } from '@ant-design/icons-angular/icons';
import { authInterceptorProviders } from './interceptors/auth.interceptor';


const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill, PlusCircleFill, MinusCircleFill, PlusOutline,MinusCircleOutline, MinusOutline,  EyeInvisibleOutline, EyeOutline ];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzLayoutModule,
    ReactiveFormsModule,
    NzImageModule,
    NzResultModule,
    NzCheckboxModule,
    NzGridModule,
    NzNotificationModule,
    NzIconModule
  ],
  providers: [authInterceptorProviders,
    { provide: NZ_I18N, useValue: es_ES }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
