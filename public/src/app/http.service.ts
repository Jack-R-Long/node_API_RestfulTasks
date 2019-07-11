import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks(); //When your built, run get tasks function 
    this.getTasksID()
   }

   getTasks() {
     // store http response as observable
     let tempObservable = this._http.get('/tasks');
     //subscribe to our observable and provide the code to act on response
     tempObservable.subscribe(data => console.log("Got our tasks!", data));
   }
   getTasksID(){
     let tempObservable = this._http.get('tasks/5d264365f8b95b63f45d1181')
     tempObservable.subscribe((data) => {
       console.log("Got one task", data)
     })
   }
}
