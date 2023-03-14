import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  passwordVisible = false;
  password?: string;
  
  loginData = {
    "email" : '',
    "user_password" : '',
  }

  constructor(private notification: NzNotificationService,
    private loginService: LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  
  formSubmit(){
    if(this.loginData.email.trim() == '' || this.loginData.email.trim() == null){
      this.notification.error(
        
        'Error',
        'Por favor ingrese un usuario',
        
      );
      return;
    }

    if(this.loginData.user_password.trim() == '' || this.loginData.user_password.trim() == null){
      this.notification.error(
        
        'Error',
        'La contraseña es requerida',
        
      );
      return;
    }

     this.loginService.generateToken(this.loginData).subscribe(
       (data:any) => {
         console.log(data);
         this.loginService.loginUser(data.token);
         this.loginService.setUser(data.user);
             this.router.navigate(['app']);
             this.loginService.loginStatusSubjec.next(true);
       },(error) => {
         console.log(error);
         this.notification.error(
           'Error',
           'Acceso inválido, por favor intente nuevamente.',
         );
         return;
       }
     )
  }


}