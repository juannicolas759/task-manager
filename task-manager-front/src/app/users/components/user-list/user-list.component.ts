import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  reports: any[] = [];
  
  constructor( private router: Router, private service: UsersService) { }

  async ngOnInit(): Promise<void> {
    const body = {"user_state": "A"} 
    await this.service.getUsersByState(body).then(res => {
      this.reports = res;
    });
    console.log(this.reports)
  }

  deleteUser(id: any){
    const body = {"user_id": id} 
    this.service.deleteUser(body).then((res) =>{
      console.log(res)    
    }).catch(error =>{
      console.log(error.data);      
    })
    this.reloadCurrentRoute()
  }

  editUser(id: any){
    const body = {"user_id": id} 
    this.router.navigate(['/']);
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }
}


