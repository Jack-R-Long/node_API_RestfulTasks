import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
   }

   getTasks() {
     return this._http.get('/tasks')
     
   }
   getTaskInfo(id){
     return this._http.get('/tasks/'+id)
   }
  //  getTasksID(){
  //    let tempObservable = this._http.get('tasks/5d264365f8b95b63f45d1181')
  //    tempObservable.subscribe((data) => {
  //      console.log("Got one task", data)
  //    })
  //  }
}
