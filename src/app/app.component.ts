import { Component, OnInit } from '@angular/core';
import {SelectItem, TreeNode} from 'primeng/api';
import { RoutecalledService } from '../app/services/routecalled/routecalled.service'

interface routesCalledModel{
  title:string,
  data : [
    { url:string, datetime:string}
  ]
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'holdem-server-management';

  routesCalled:routesCalledModel[]
  displayedRoutesCalled:any

  routesLabel:string[] = []
  routesData:number[] = []
  routesBackgroundColor:string[] = []

  routesTree:TreeNode[]
  routesTree2:any[]
  selectedRoutes:any[]

  sample = true
  constructor(private routecalled:RoutecalledService){
    this.get()

  }
  serverMode:string = 'local';
  serverValue:string = 'http://192.168.254.103:8080';
  //local variables
    LocalIPOptions:SelectItem[] = [
      {label:'100',value: 'http://192.168.254.100:8080'},
      {label:'101',value: 'http://192.168.254.101:8080'},
      {label:'102',value: 'http://192.168.254.102:8080'},
      {label:'103',value: 'http://192.168.254.103:8080'},
      {label:'104',value: 'http://192.168.254.104:8080'},
      {label:'105',value: 'http://192.168.254.105:8080'},
      {label:'106',value: 'http://192.168.254.106:8080'},
      {label:'107',value: 'http://192.168.254.107:8080'},
      {label:'108',value: 'http://192.168.254.108:8080'},
      {label:'109',value: 'http://192.168.254.109:8080'},
    ]
    LocalIPValue:string;

  OnInit(){

  }
  

  get(){
    this.routecalled.getRoutesCalled(this.serverValue)
    .subscribe(
      (res:any[]) => {
        this.routesCalled = res
        this.routesTree2 = res
        console.log(res)
      }
    )
  }

  randomColor() {
    var length = 6;
    var chars = '0123456789ABCDEF';
    var hex = '#';
    while(length--) hex += chars[(Math.random() * 16) | 0];
    return hex;
  }

  translateToChart(){
    this.get()

    if(this.routesCalled != undefined){
      for(let i = 0; i < this.routesCalled.length; i++){
        this.routesLabel[i] = this.routesCalled[i].title
        this.routesData[i] = this.routesCalled[i].data.length
        this.routesBackgroundColor[i] = this.randomColor()
      }
    }

    this.displayedRoutesCalled = {
      labels: this.routesLabel,
      datasets: [
          {
              data: this.routesData,
              backgroundColor: this.routesBackgroundColor
          }]    
      };
  }

  test(){
    console.log(this.routesTree2[0].show)
    this.routesTree2[0].show = false
  }

}
