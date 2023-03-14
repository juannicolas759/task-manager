import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent {
  reports: any[] = [];
  
  constructor( private router: Router,
     private service: TasksService) { }

  async ngOnInit(): Promise<void> {
    await this.service.getTask().then(res => {
      this.reports = res;
    });
    console.log(this.reports)
  }

  deleteUser(id: any){
    const body = Number(id) 
    this.service.deleteTask(body).then((res) =>{
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


