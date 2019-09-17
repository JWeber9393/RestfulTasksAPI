import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Restful Tasks';
  tasks = [];
  view = ''
  newTask: any;
  editTask: any;
  selectedTask: any;

  constructor(private _httpService: HttpService) {
    this.getTasksFromService();
  }
  
  ngOnInit(){
    // this.getTasksFromService();
    this.newTask = { title: "", description: "" }
  }
  
  getTasksFromService(){
    let observable = this._httpService.allTasks();
    observable.subscribe(data => {
      this.tasks = data['info'];
    });
  }
  showTask(task) {
    this.selectedTask = task;
  }

  onSubmit(){
    let observable = this._httpService.createTask(this.newTask);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.newTask = { title: "", description: "", completed: false };
    })
  }
  
  onEdit(){
    let observable = this._httpService.updateTask(this.editTask);
    observable.subscribe(data => {
      console.log("Updated our task", data);
      this.getTasksFromService();
    })
  }

  taskForm(task){
    this.editTask = task;
  }

  onDelete(task){
    let observable = this._httpService.deleteTask(task);
    observable.subscribe(data => {
      console.log('Deleted out task', data);
      this.getTasksFromService();
    })
  }
}

