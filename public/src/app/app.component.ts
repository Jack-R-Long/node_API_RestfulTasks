import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  tasks = [];
  is_tasks = false;
  task_info = {};
	
	constructor(private _httpService: HttpService){
  }
  // ngOnInit(){
  //   this.getTaskFromService()
  // }
  getTaskFromService(): void{
    let observable = this._httpService.getTasks()
    observable.subscribe(data =>{
      console.log("Got tasks from service")
      console.log(data)
      this.tasks = data['data'] 
    })
  }
  onClick(): void{
    console.log('Clicked bitch')
    this.getTaskFromService()
  }
  showInfo(task): void{
    console.log("Show info Bitch!")
    var task_id = task._id
    let observable = this._httpService.getTaskInfo(task_id)
    observable.subscribe(data =>{
      console.log("Got individual task info!")
      console.log(data['data'])
      this.task_info = data['data']
      this.is_tasks = true
    })
  }
}