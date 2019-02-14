import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RoutecalledService {

  constructor(private http:Http) { }

  getRoutesCalled(server:string){
    return this.http.get(server+'/Api/v1/ServerManagement')
    .pipe(
      map( res => res.arrayBuffer().byteLength > 0 ? res.json() : {} )
    )
    
  }
}
