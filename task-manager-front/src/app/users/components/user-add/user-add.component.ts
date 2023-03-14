import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  userForm: FormGroup
  arrayData: string []= []  
  submitted = false;
  id: string | null;
  user: any = {};
  manager: any = {};
  title = 'Agregar Usuarios';

  doc_types = [{id: 'PP', name:"Pasaporte"},
            {id: 'CC', name:"Cédula de ciudadanía"},
            {id: 'CE', name:"Cédula de extranjería"}]
    
  constructor(private fb: FormBuilder, private aRoute: ActivatedRoute,
    private router: Router, private service: UsersService) { 
    this.userForm = this.fb.group({
      first_name: [this.user.first_name, Validators.required],
      last_name: [this.user.last_name, Validators.required],
      email: [this.user.email, Validators.required],
      user_password: [this.user.user_password, Validators.required],
  })

  this.id = this.aRoute.snapshot.paramMap.get('id');
  console.log(this.id)}

  async ngOnInit(): Promise<void> {
    this.id = await this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)
    await this.isEdit()
    this.userForm = this.fb.group({
      first_name: [this.user.first_name, Validators.required],
      last_name: [this.user.last_name, Validators.required],
      email: [this.user.email, Validators.required],
      user_password: [this.user.user_password, Validators.required],

    })
  }

  validate(){
    this.clean()
    console.log(this.userForm.value)
  }
  clean(){
    this.arrayData = [];
  }

  addEditUser() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    if (this.id === null) {
      console.log(this.id)
      this.addUser();
    } else {
      this.editUser(this.id);
    }
  }

  async addUser()  {
    await this.service.getManager().then((res) => {
      this.manager = res
      console.log(this.manager[0])
   }).catch(error => {
       console.log(error);
   })
    const user: any = {
      first_name: this.userForm.value.first_name,
      last_name: this.userForm.value.last_name, 
      email: this.userForm.value.email,
      user_password: this.userForm.value.user_password,
      user_state: "A",
      manager_id:this.manager[0].user_id,
    }
    this.service.addUser(user).then((res) => {
      console.log(res)
      this.router.navigate(['/app/users']);
    }).catch(error => {
        console.log(error);
    })

  }

  editUser(id: string) {
    console.log("lo edite", id)
    const user: any = {
      user_id: Number(id),
      first_name: this.userForm.value.first_name,
      last_name: this.userForm.value.last_name, 
      email: this.userForm.value.email,
      user_password: this.userForm.value.user_password,
      user_state: "A",
      manager_id:this.manager.user_id,
    }
    console.log(user)
    this.service.updateUser(user).then((res) => {
       console.log(res)
      this.router.navigate(['/app/users']);
    }).catch(error => {
        console.log(error);
    })
  }

  async isEdit() {
    if (this.id !== null) {
      this.title = 'Editar Personal';
      console.log("es editar")
      const data = this.id
      await this.service.getUsersById(data).then((res) => {
         this.user = res
         console.log(this.user)
      }).catch(error => {
          console.log(error);
      })
    }
  }

}
