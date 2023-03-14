import { Injectable } from '@angular/core';
import axios from 'axios';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class HistoryTasksService {
  instance = axios.create();

  constructor() { 
    this.instance.defaults.baseURL = `${baserUrl}/historyTasks`;
    // this.instance.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('token')}`;
  }

  async assignHistoryTask(datas: any): Promise<any> {
    const res = await this.instance.post('assignHistoryTask',  datas);
    return res.data;
  }

}