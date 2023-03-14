import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-form-tasks',
  templateUrl: './form-tasks.component.html',
  styleUrls: ['./form-tasks.component.css']
})
export class FormTasksComponent {
  taskForm: FormGroup
  arrayData: string []= []  
  submitted = false;
  id: string | null;
  task: any = {};
  manager: any = {};
  title = 'Agregar Tareas'

  selectedType = 'Activo';

  type_task = [{id: 'IN', name:"Incidencia"},
  {id: 'BG', name:"Bug"},
  {id: 'TK', name:"Tarea"}]
    
  constructor(private fb: FormBuilder, private aRoute: ActivatedRoute,
    private router: Router, private service: TasksService, private datePipe: DatePipe) { 
    this.taskForm = this.fb.group({
      description_task: ["", Validators.required],
      type_task: [, Validators.required],
      creation_date: [],
      guess_end_date: [],
  })

  this.id = this.aRoute.snapshot.paramMap.get('id');
  console.log(this.id)}

  async ngOnInit(): Promise<void> {
    this.id = await this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)
    await this.isEdit()
    this.taskForm = this.fb.group({
      description_task: [this.task.description_task, Validators.required],
      type_task: [this.task.type_task, Validators.required],
      creation_date: [],
      guess_end_date: [],

    })
  }

  onChange(result: Date): void {
    console.log('Selected Time: ', result);
  }

  onOk(result: Date | Date[] | null): void {
    console.log('onOk', result);
  }

  onCalendarChange(result: Array<Date | null>): void {
    console.log('onCalendarChange', result);
  }

  validate(){
    this.clean()
    console.log(this.taskForm.value)
  }
  clean(){
    this.arrayData = [];
  }

  addEditUser() {
    this.submitted = true;
    if (this.taskForm.invalid) {
      return;
    }
    if (this.id === null) {
      console.log(this.id)
      this.addTask();
    } else {
      this.editTask(this.id);
    }
  }

  fecha = new Date();

  async addTask()  {
    console.log(this.datePipe.transform(new Date(this.taskForm.value.guess_end_date), "yyyy-MM-dd HH:mm:ss"))
    const task: any = {
      description_task: this.taskForm.value.description_task,
      type_task: this.taskForm.value.type_task, 
      creation_date: this.datePipe.transform(new Date(), "yyyy-MM-dd HH:mm:ss"),
      guess_end_date: this.datePipe.transform(new Date(this.taskForm.value.guess_end_date), "yyyy-MM-dd HH:mm:ss"),
    }
    this.service.addTask(task).then((res) => {
      console.log(res)
      this.router.navigate(['/app/tasks']);
    }).catch(error => {
        console.log(error);
    })

  }

  editTask(id: string) {
    const user: any = {
      task_id: Number(id),
      description_task: this.taskForm.value.description_task,
      type_task: this.taskForm.value.type_task, 
      creation_date: this.datePipe.transform(new Date(this.taskForm.value.creation_date), "yyyy-MM-dd HH:mm:ss"),
      guess_end_date: this.datePipe.transform(new Date(this.taskForm.value.guess_end_date), "yyyy-MM-dd HH:mm:ss"),

    }
    console.log(user)
    this.service.updateTask(user).then((res) => {
       console.log(res)
      this.router.navigate(['/app/tasks']);
    }).catch(error => {
        console.log(error);
    })
  }

  async isEdit() {
    if (this.id !== null) {
      this.title = 'Editar Tareas';
      console.log("es editar")
      const data = this.id
      await this.service.getTaskById(data).then((res) => {
         this.task = res
         console.log(this.task)
      }).catch(error => {
          console.log(error);
      })
    }
  }

}
