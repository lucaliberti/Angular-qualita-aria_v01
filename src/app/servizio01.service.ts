
// creato con 
// ng generate service servizio01
import { HttpClient }  from'@angular/common/http';



import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class Servizio01Service {
  dato:string;

  constructor( private httclient : HttpClient){}

  httpGet(url:string){
    return this.httclient.get<any>(url)  // restituisce un Observable
  }
}
