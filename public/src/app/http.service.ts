import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.allTasks();
  }

  allTasks(){
    return this._http.get('/tasks');
  }
  createTask(newTask){
    return this._http.post('/tasks', newTask);
  }
  updateTask(editTask){
    return this._http.put(`/tasks/${editTask._id}`, editTask);
  }
  
  deleteTask(task){
    return this._http.delete(`/tasks/${task._id}`, task);
  }
}