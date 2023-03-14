import { Injectable } from '@angular/core';
import axios from 'axios';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  instance = axios.create();

  constructor() { 
    this.instance.defaults.baseURL = `${baserUrl}/tasks`;
    // this.instance.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('token')}`;
  }

  async addTask(datas: any): Promise<any> {
    const res = await this.instance.post('createTask',  datas);
    return res.data;
  }

  async createTask(data:any): Promise<any> {
    console.log(data)
    const res = await this.instance.get('/createTask', data);
    return res.data;
  }

  async getTaskById(id: any): Promise<any> {
    const res = await this.instance.get('/getTaskById/'+id);
    return res.data;
  }

  async getTask(): Promise<any> {
    const res = await this.instance.get('/getTasks');
    return res.data;
  }

  
  async deleteTask(id: any): Promise<any> {
    const res = await this.instance.delete('/deleteTask/'+id);
    return res.data;
  }

  async updateTask(datas: any): Promise<any> {
    const res = await this.instance.put('/updateTask', datas);
    return res.data;
  }
}
