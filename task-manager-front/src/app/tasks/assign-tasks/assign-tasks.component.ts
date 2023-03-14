import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoryTasksService } from 'src/app/services/history-tasks.service';
import { TasksService } from 'src/app/services/tasks.service';
import { UsersService } from 'src/app/services/users.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-assign-tasks',
  templateUrl: './assign-tasks.component.html',
  styleUrls: ['./assign-tasks.component.css']
})
export class AssignTasksComponent {
  taskAForm: FormGroup
  arrayData: string []= []  
  users: string []= []
  tasks: string []= []  
  submitted = false;
  id: string | null;
  assign: any = {};
  manager: any = {};
  title = 'Asignar Tareas'

  selectedType = 'Activo';

  state_id = [{id: 1, name:"ToDO"},
  {id: 2, name:"Prgreso"},
  {id: 3, name:"Finalizada"}]
    
  constructor(private fb: FormBuilder, private aRoute: ActivatedRoute, private datePipe: DatePipe,
    private router: Router, private service: UsersService, private serviceTask: TasksService, private serviceHis: HistoryTasksService ) { 
    this.taskAForm = this.fb.group({
      user_id: ["", Validators.required],
      task_id: [, Validators.required],
      state_id: [],
      change_date: [],
  })

  this.id = this.aRoute.snapshot.paramMap.get('id');
  console.log(this.id)}

  async ngOnInit(): Promise<void> {
    this.id = await this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)
    this.taskAForm = this.fb.group({
      user_id: [this.assign.user_id, Validators.required],
      task_id: [this.assign.task_id, Validators.required],
      state_id: [],
      change_date:[]

    });
    const body = {"user_state": "A"} 
    await this.service.getUsersByState(body).then(res => {
      this.users = res;
    });

    await this.serviceTask.getTask().then(res => {
      this.tasks = res;
    });
  }


  async addTask()  {
    const task: any = {
      user_id: this.taskAForm.value.description_task,
      task_id: this.taskAForm.value.type_task, 
      state_id: this.taskAForm.value.state_id,
      change_date: this.datePipe.transform(new Date(), "yyyy-MM-dd HH:mm:ss"),
    }
    this.serviceHis.assignHistoryTask(task).then((res) => {
      console.log(res)
      this.router.navigate(['/app/tasks']);
    }).catch(error => {
        console.log(error);
    })

  }
}
