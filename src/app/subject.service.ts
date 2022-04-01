import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { }
  
  public sub=new Subject<any>();

  passData(data:any){
    this.sub.next(data)
  }
  

}
