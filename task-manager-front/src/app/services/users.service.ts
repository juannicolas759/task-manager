import { Injectable } from '@angular/core';
import axios from 'axios';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  instance = axios.create();

  constructor() { 
    this.instance.defaults.baseURL = `${baserUrl}/users`;
    // this.instance.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('token')}`;
  }

  async addUser(datas: any): Promise<any> {
    const res = await this.instance.post('createUser',  datas);
    return res.data;
  }

  async getUsersByState(data:any): Promise<any> {
    console.log(data)
    const res = await this.instance.get('/getUserByState', data);
    return res.data;
  }

  async getUsersById(id: any): Promise<any> {
    const res = await this.instance.get('/getUserById/'+id);
    return res.data;
  }
  async getManager(): Promise<any> {
    const res = await this.instance.get('/getManager');
    return res.data;
  }
  

  async deleteUser(id: any): Promise<any> {
    const res = await this.instance.put('/deleteUser', id);
    return res.data;
  }

  async getUserTasks(id: any): Promise<any> {
    const res = await this.instance.get("/getUserTasks", id);
    return res.data;
  }

  async updateUser(datas: any): Promise<any> {
    const res = await this.instance.put('/updateUser', datas);
    return res.data;
  }
}
